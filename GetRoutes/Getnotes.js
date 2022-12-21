//NPM for unique id between notes
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  
app.get('/api/notes', (req, res) => { res.sendFile(path.join(__dirname, '../db/db.json'));
});

//Pulls notes from db.json and saves it 
app.post('/api/notes', (req, res) => {
let database = fs.readFileSync('db/db.json');
    database = JSON.parse(database);
    res.json(database);

    let input = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    database.push(input);
    fs.writeFileSync('db/db.json', JSON.stringify(database));
    res.json(database);

});

//Delete Function
app.delete('api/notes/:id', (req, res) => {
  let database = JSON.parse(fs.readFileSync('db/db.json'))
  let removeN = database.filter(item => item.id !== req.params.id);
  fs.writeFileSync('db/db.json', JSON.stringify(removeN));
  res.json(removeN);
});

};



//                                                Future Router Integration

//Required file imports
//const express = require("express");
//const notesRouter = express.Router();

//Pulls router info
//const writeTo = require("../db/read-db");

// Get request for notes api
//notesRouter.get("/api/notes", function (_req, res) {
  
//  writeTo
//    .readAll()
//    .then((notes) => res.json(notes))
//   .catch((err) => console.log(err));
//});

// Post request for notes api
//notesRouter.post("/api/notes", function (req, res) {
// writeTo
//    .addNew(req.body)
//    .then((notes) => res.json(notes))
//    .catch((err) => console.log(err));
//});

//module.exports = notesRouter;