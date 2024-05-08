const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send("Hello World"));

const handlePost = (req, res) => {
    const data = req.body;
    console.log(data);
    const nn = data.map((item) =>{
        return item.name
    })
    res.json({ message: `Message successfully sent to ${req.path}`, data:nn});
};

for (let i = 1; i <= 5; i++) {
    app.post(`/post/:${i}`, handlePost);
}

app.listen(port, () => console.log(`Server running on port ${port}`));
