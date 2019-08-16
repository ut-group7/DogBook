const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./models/index");
const app = express(feathers());
const routes = require("./routes");

mongoose.Promise = global.Promise;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.errorHandler());
app.use(routes);

app.configure(express.rest());
app.configure(socketio());






//post seen dog breed or description.
app.post("/api/seen/data", function(req, res) {
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

//delete seen dogs
app.delete("/api/seen/data/:id", function(req, res) {
  db.SeenDog.findById({ _id: req.params.id })
    .then(dbDog => dbDog.remove())
    .then(dbDog => res.json(dbDog))
    .catch(err => res.status(422).json(err));
});



const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Feather server listening on port ${port}`);
});
