// Imports
const express = require('express');
const app = express();

// Default Port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


//Retrives the routers from both files
require('./GetRoutes/Getnotes.js')(app);
require('./GetRoutes/Gethtml.js')(app);


//Runs the server.js file on the default port
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});