const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const cors = require("cors");

const mongoose = require("mongoose");
const service = require("feathers-mongoose");

const Model = require("./models/lostDog");
const db = require("./models/index");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/snoopDog", {
  useNewUrlParser: true
});

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.configure(express.rest());
app.configure(socketio());
app.use(cors());


//the below code will help create a dog in your db for testing/seeding purposes. comment it out once you have got the server running successfully.
//--------------------------------------------
// app.use("/tasks", service({
//     Model,
//     lean: false
// }));

// app.service("tasks").create({
//     dogBreed: "mutt"
// }).then(function(task){
//     console.log("created task", task);
// });



//locate one task, for testing purposes
app.get("/api/data", function(req, res) {
  db.LostDog.find({})
    .then(dbDog => {
      res.json(dbDog);
    })
    .catch(err => res.json(err));
});


//post lost dog breed or description. 
app.post("/api/data", function(req, res){
    db.LostDog.create(req.body) 
        .then(dbDog => res.json(dbDog))
        .catch(err => res.json(err));
});


//post seen dog breed or description. 
app.post("/api/seen/data", function(req, res){
  db.SeenDog.create(req.body) 
      .then(dbDog => res.json(dbDog))
      .catch(err => res.json(err));
});

//locate seen dogs
app.get("/api/seen/data", function(req, res) {
  db.SeenDog.find({})
    .then(dbDog => {
      res.json(dbDog);
    })
    .catch(err => res.json(err));
});


app.use(express.errorHandler());

const port = 3030;
app.listen(port, () => {
  console.log(`Feather server listening on port ${port}`);
});
