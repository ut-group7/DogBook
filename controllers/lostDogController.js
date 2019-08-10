const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.LostDog.find({})
      .then(dbDog => {
        res.json(dbDog);
      })
      .catch(err => res.json(err));
  },
  findById: function(req,res) {
    db.LostDog.find({ _id: req.params.id })
    .then(dbDog => res.json(dbDog))
    .catch(err => res.json(err));
  },
  findByUser: function(req,res) {
    db.LostDog.find({ user: ObjectId(req.params.id) })
    .then(dbDog => res.json(dbDog))
    .catch(err => res.json(err));
  },
  create: function(req, res){
    db.LostDog.create(req.body)
    .then(dbDog => res.json(dbDog))
    .catch(err => res.json(err));
  },
  remove: function(req, res){
    db.LostDog.findById({ _id: req.params.id })
    .then(dbDog => dbDog.remove())
    .then(dbDog => res.json(dbDog))
    .catch(err => res.status(422).json(err));
  }

};


