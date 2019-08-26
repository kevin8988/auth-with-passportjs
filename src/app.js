const path = require("path");
const express = require("express");
const authRouter = require("./routes/authRouter");
const homeRouter = require("./routes/homeRouter.js");

const app = express();

//set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//simple route
app.use(express.json());
app.use(authRouter);
app.use(homeRouter);

module.exports = app;
