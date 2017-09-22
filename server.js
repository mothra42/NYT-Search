// import express from "express";
// import mongoose from "mongoose";
// import bluebird from "bluebird";
// import bodyParser from "body-parser";
// import articleController from "./controllers/articleController";
//for testing purposes
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var articleController = require("./controllers/articleController");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3030;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", articleController);

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Connect mongoose to our database
mongoose.connect("mongodb://heroku_v4qzb19k:okea6161obj75q33nn5j10eve7@ds139675.mlab.com:39675/heroku_v4qzb19k", function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
