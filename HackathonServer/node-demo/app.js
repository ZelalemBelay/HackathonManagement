
// var MongoClient = require('mongodb').MongoClient;
// const express = require('express');
// var path = require("path");
// var bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// var port = 9002;
// var url = "mongodb://localhost:27017/";
// var userId;

// var mongoQuery;

// app.get('/api/users/getAllUsers', (req, res) => {
// //res.send('hi')
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//   mongoQuery = db.db("usersdb").collection("social");
//     mongoQuery.find({}).toArray(function(err, result) {
//       if (err) throw err;
//       db.close();
//       res.json(result);	
//     });
//   });

// });

// app.get('/api/users/getUser/:userId', (req, res) => {
//     userId = req.params.userId;
  
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     mongoQuery = db.db("usersdb").collection("social");
//     mongoQuery.find({username: userId}).toArray(function(err, result) {
//       if (err) throw err;
//       db.close();    
//       res.json(result);
//     });
//   });  
//   });
  
//   app.post('/hParticipant/insert', (req, res) => {
//   console.log("DATA : "+JSON.stringify(req.body));
//   //console.log('dDdd');
//   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     mongoQuery = db.db("hackdb").collection("hparticipants");
//     mongoQuery.insert({req : req.body}, function(err, rr) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//       var response='{\"status\" : \"success\"}';
//       res.send("success");
//     });
//   });  
//   });


// app.listen(port, () => console.log('Server running on port: ', port));


var express = require("express");
var app = express();
var port = 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/hackdb");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});