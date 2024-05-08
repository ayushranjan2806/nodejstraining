const express = require('express');
const app = express();
const port = 3000;
 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
 
app.get('/', (req, res) => {
    res.render('layout', { pageTitle: 'Home Page', message :'this is the message' });
});
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

