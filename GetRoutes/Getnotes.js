//Required file imports
const express = require("express");
const notesRouter = express.Router();

//Pulls router info
const writeTo = require("../db/read-db");

// Get request for notes api
notesRouter.get("/api/notes", function (req, res) {
  
  writeTo
    .readAll()
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

// Post request for notes api
notesRouter.post("/api/notes", function (req, res) {
  writeTo
    .addNew(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

//Delete Function (bonus)
notesRouter.delete("/api/notes/:id", function (req, res) {
  writeTo
    .deleteNote(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

module.exports = notesRouter;