const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve JSON data
app.get('/json-data', (req, res) => {
    const jsonData = {
        name: 'John',
        age: 20,
        city: 'pune'
    };
    res.json(jsonData);
});

// Serve HTML content
app.get('/html-data', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>HTML Content</title>
        </head>
        <body>
            <h1>Hello, HTML!</h1>
        </body>
        </html>
    `;
    res.set('Content-Type', 'text/html');
    res.send(htmlContent);
});

// Serve data from the provided JSON file
app.get('/json-api-data', async (req, res) => {
    try {
        const { data } = await axios.get('https://mocki.io/v1/c1457800-c7f0-450e-bf91-e48168a33030');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
