const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const cors = require("cors");
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()

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

app.use(require('express-session')({
  secret: process.env.SESS_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1 * 60 * 1000
  }
}));
app.use(passport.initialize());
app.use(passport.session());


app.configure(express.rest());
app.configure(socketio());
app.use(cors());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


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

//find unique dog
app.get("/api/data/:id", function (req, res){
  db.LostDog.find({ _id: req.params.id })
    .then(dbDog => res.json(dbDog))
    .catch(err => res.json(err));
});


//post lost dog breed or description. 
app.post("/api/data", function(req, res){
    db.LostDog.create(req.body) 
        .then(dbDog => res.json(dbDog))
        .catch(err => res.json(err));
});

// delete dog with unique mongo id
app.delete("/api/data/:id", function(req, res) {
  db.LostDog
  .findById({ _id: req.params.id })
  .then(dbDog => dbDog.remove())
  .then(dbDog => res.json(dbDog))
  .catch(err => res.status(422).json(err))
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

//delete seen dogs
app.delete("/api/seen/data/:id", function(req, res) {
  db.SeenDog
  .findById({ _id: req.params.id })
  .then(dbDog => dbDog.remove())
  .then(dbDog => res.json(dbDog))
  .catch(err => res.status(422).json(err))
});


app.use(express.errorHandler());

//======================================================
//Authentication
//======================================================

passport.use(new Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3030/auth/google/redirect"
},
function(accessToken, refreshToken, profile, cb) {
  console.log('callback function fired')
  console.log(profile)
  db.User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
  );

app.get('/auth/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
    
  });


const port = 3030;
app.listen(port, () => {
  console.log(`Feather server listening on port ${port}`);
});
