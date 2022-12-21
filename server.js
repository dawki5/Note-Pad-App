//Required Import
const express = require("express");

//Create an express app
const app = express();
const path = require("path");
//Default Port
const port = 3001

//const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//Requires and uses routers from GetHtmls.js and GetNotes.js
const getHtmls = require("./GetRoutes/GetHtml.js");
app.use(getHtmls);
const getNotesApi = require("./GetRoutes/GetNotes.js");
app.use(getNotesApi);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

