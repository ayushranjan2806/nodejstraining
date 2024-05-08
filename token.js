const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { Pool } = require('pg');

dotenv.config();

const app = express();

app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};

// Register route
app.post('/api/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
            [username, hashedPassword, email]
        );
        res.status(201).send('User created');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
        if (user.rows.length === 0) return res.status(400).send('Invalid username or password');
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) return res.status(400).send('Invalid username or password');
        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET);
        res.status(200).json({token});
        res.header('authorization', token).send('Login successful');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Dashboard route
app.get('/api/dashboard', verifyToken, (req, res) => {
    res.send('Welcome to the dashboard');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
