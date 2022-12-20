//Required File Imports
const express = require("express");
const htmlRouter = express.Router();
const path = require("path");

//Get requests for both html files
htmlRouter.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

htmlRouter.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;