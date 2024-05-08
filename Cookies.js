const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// user cookie-parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  // read a cookie
  const username = req.cookies.username || 'Guest';

  res.send(`Hello, ${username} .........`);
});

app.get("/set-cookie/:username", (req, res) => {
  // set a cookie
  res.cookie("username", req.params.username);
  res.send("Cookie set!");
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie cleared!");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});