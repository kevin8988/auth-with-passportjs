const path = require("path");
const express = require("express");

const app = express();

//set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//simple route
app.get("/", (req, res) => {
  res.render("home");
});

module.exports = app;
