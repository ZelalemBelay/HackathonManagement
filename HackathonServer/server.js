

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
var hparticipantSchema = new mongoose.Schema({
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
    }
});

var Hparticipant = mongoose.model("Hparticipant", hparticipantSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/hparticipant/insert", (req, res) => {
    var myData = new Hparticipant(req.body);
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

app.get("/", (req, res) => {

});

var Credential = mongoose.model("Hparticipant", hparticipantSchema.credential);

app.post("/login", (req, res) => {
    var credential = new Hparticipant(req.body);
    Hparticipant.findOne({ 'credential.userName': req.body.userName, 'credential.password': req.body.password }, (err, data) => {

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