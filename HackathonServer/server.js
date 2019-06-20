

//import { Schema } from './schema';

var express = require("express");
var app = express();
var port = 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/hackdb");
var hUserSchema = new mongoose.Schema({
    teamName: String,
    teamEmail: String,
    teamMembers: [{
        firstName: String,
        lastName: String,
        email: String,
        phone: String
    }],
    credential: {
        userName: String,
        password: String
    },
    role: String,
    idea: {
        description: String,
        attachement: String
    }
});

var hUser = mongoose.model("hUser", hUserSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/hUser/register", (req, res) => {
    var myData = new hUser(req.body);
    var message = {
        status: "success",
        detail: null
    }
    myData.save()
        .then(item => {
            // res.send("Name saved to database");
            res.json(message);
        })
        .catch(err => {
            message.status = "error";
            message.detail = err;
            res.json(message);

            // res.status(400).send("Unable to save to database");
        });
});


app.post("/login", (req, res) => {
    //var credential = new Hparticipant(req.body);
    hUser.findOne({ 'credential.userName': req.body.userName, 'credential.password': req.body.password }, (err, data) => {

        console.log(data);

        var response = {
            response: "NOT_FOUND"
        }
        if (data == null)
            res.json(response);
        else
            res.json(data);

    })
});


var hEventSchema = new mongoose.Schema({
    eventid: String,
    title: String,
    fromDate: String,
    toDate: String,
    prize: String,
    eventConfig: {
        teamMemberMax: String,
        ideaSubmissionMax: String,
        evaluationProcedure: String
    }
});

var hEvent = mongoose.model("hEvent", hEventSchema);


app.post("/hEvent/insert", (req, res) => {
    var myData = new hEvent(req.body);
    var message = {
        status: "success",
        detail: null
    }
    myData.save()
        .then(item => {
            // res.send("Name saved to database");
            res.json(message);
        })
        .catch(err => {
            message.status = "error";
            message.detail = err;
            res.json(message);

            // res.status(400).send("Unable to save to database");
        });
});

app.post("/hEvent", (req, res) => {
    //var credential = new Hparticipant(req.body);
 
    hEvent.find({}, (err, data) => {

        console.log(data);

        var response = {
            response: "NOT_FOUND"
        }
        if (data == null)
            res.json(response);
        else
            res.json(data);

    })
});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});