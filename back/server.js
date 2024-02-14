require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require("cors");
const { test } = require('./funciones/funciones');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// const carpetaStatic = path.join(__dirname, "static");

// app.use(express.static(carpetaStatic));
app.get("/test",test);

app.listen(4000, function () {
  console.log("Server running");
});