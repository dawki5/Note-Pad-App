//Required Import
const express = require("express");
const fs = require('fs')

//Create an express app
const app = express();
const path = require("path");

//Default Port
//const port = 3001

const port = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require('./GetRoutes/GetHtml')(app);
require('./GetRoutes/Getnotes')(app);


//Requires and uses routers from GetHtmls.js and GetNotes.js
//const getHtmls = require("./GetRoutes/GetHtml.js");
//app.use(getHtmls);
//const getNotesApi = require("./GetRoutes/GetNotes.js");
//app.use(getNotesApi);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

