//Required Import
const express = require("express");

//Create an express app
const app = express();
const path = require("path");

//Default Port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//Requires and uses routers from GetHtmls.js and GetNotes.js
const getHtmls = require("./GetRoutes/GetHtml.js");
app.use(getHtmls);
const getNotesApi = require("./GetRoutes/GetNotes.js");
app.use(getNotesApi);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});