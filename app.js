"use strict";
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");

const ejs = require("ejs");

const PORT = 6999;
const HOST = "0.0.0.0";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(compression());
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

app.use(
  "/lightgallery",
  express.static(path.join(__dirname, "node_modules/lightgallery.js/src/js"))
);
app.get("/", function (req, res, next) {
  res.render("pages/index");
});

app.get("/about", function (req, res, next) {
  res.render("pages/about");
});

app.get("/church", function (req, res, next) {
  res.render("pages/church");
});

app.get("/gallery", function (req, res, next) {
  res.render("pages/gallery");
});
app.get("/leadership", function (req, res, next) {
  res.render("pages/leader");
});
app.get("/programmes", function (req, res, next) {
  res.render("pages/programmes");
});

app.get("/contact", function (req, res, next) {
  res.render("pages/contact");
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
