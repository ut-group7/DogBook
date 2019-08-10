const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./models/index");
const app = express(feathers());
const routes = require("./routes");
require('dotenv').config()

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/snoopDog", {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.errorHandler());
app.use(routes);

app.configure(express.rest());
app.configure(socketio());




// //locate one task, for testing purposes
// app.get("/api/data", function(req, res) {
//   db.LostDog.find({})
//     .then(dbDog => {
//       res.json(dbDog);
//     })
//     .catch(err => res.json(err));
// });

// //find unique dog
// app.get("/api/data/:id", function(req, res) {
//   db.LostDog.find({ _id: req.params.id })
//     .then(dbDog => res.json(dbDog))
//     .catch(err => res.json(err));
// });

// //post lost dog breed or description.
// app.post("/api/data", function(req, res) {
//   db.LostDog.create(req.body)
//     .then(dbDog => res.json(dbDog))
//     .catch(err => res.json(err));
// });

// // delete dog with unique mongo id
// app.delete("/api/data/:id", function(req, res) {
//   db.LostDog.findById({ _id: req.params.id })
//     .then(dbDog => dbDog.remove())
//     .then(dbDog => res.json(dbDog))
//     .catch(err => res.status(422).json(err));
// });

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



const port = 3030;
app.listen(port, () => {
  console.log(`Feather server listening on port ${port}`);
});


// app.use(multer({ dest: './uploads/',
//   rename: function (fieldname, filename) {
//     return filename;
//   },
//  }));

//  app.post('/api/photo',function(req,res){
//   var newItem = new Item();
//   newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newItem.img.contentType = 'image/png';
//   newItem.save();
//  });