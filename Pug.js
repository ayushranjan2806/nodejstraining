const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index', { title: 'express with pug' });
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
