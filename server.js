
const connection = require('./config/connection.js')
const express = require("express");
const exphbs = require("express-handlebars");
const routerController = require("./controllers/burgers_controllers");

const app = express();
// handlebars initialization
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// for routes
routerController(app)
connection.connect();
// for serving media assets
app.use( express.static('public') )

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` );
})
