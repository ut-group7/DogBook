const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.LostDog.find({})
      .then(dbDog => {
        res.json(dbDog);
      })
      .catch(err => res.json(err));
  },
  findById: function(req, res) {
    db.LostDog.find({ _id: req.params.id })
    .then(dbDog => res.json(dbDog))
    .catch(err => res.json(err));
  },
  findByUser: function(req, res) {
    db.User.find({_id: req.params.id})
    .populate('posts')
    .then(dbDog => res.json(dbDog))
    .catch(err => res.json(err));
  },
  create: function(req, res){
    db.LostDog.create(req.body)
    .then(dbDog => {
      db.User.findByIdAndUpdate(req.body.user, {$push: {posts: dbDog}})
      .catch(err => res.json('user update error: ' + err))
      res.json(dbDog)})
    .catch(err => res.json(err));
  },
  remove: function(req, res){
    db.LostDog.find({ _id: req.params.id })
    .then(dbDog => dbDog.remove())
    .then(dbDog => res.json(dbDog))
    .catch(err => res.status(422).json(err));
  },
};


