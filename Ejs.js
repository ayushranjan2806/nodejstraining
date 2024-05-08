const express = require("express");
const ejs = require("ejs");

const app = express();

// set EJS as the template engine
app.set("view engine", "ejs");

// define a route
app.get("/", (req, res) => {
  // render the 'index.ejs' template
  res.render("index", { title: "Express with EJS", message: "Hello, EJS!" });
});

// START the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});