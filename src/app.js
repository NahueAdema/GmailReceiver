const express = require("express");
const bodyParser = require("body-parser");
const mailRoutes = require("./routes/mail");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use("/mail", mailRoutes);

module.exports = app;
