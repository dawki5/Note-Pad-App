//Required File Imports
const path = require("path");


module.exports = (data) => {

data.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

data.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

};


//                                                          Future router integration below


//const express = require("express");
//const htmlRouter = express.Router();

//Get requests for both html files
//htmlRouter.get("/notes", function (req, res) {
 //   res.sendFile(path.join(__dirname, "../public/notes.html"));
//});

//htmlRouter.get("*", function (req, res) {
//    res.sendFile(path.join(__dirname, "../public/index.html"));
//});

//module.exports = htmlRouter;