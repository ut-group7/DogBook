const router = require('express').Router();
const db = require('../../models');
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()


//Defining Middleware
router.use(require('express-session')({
    secret: process.env.SESS_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1 * 60 * 1000
    }
  }));
  
  router.use(passport.initialize());
  router.use(passport.session());
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });



//======================================================
//Google OAuth2.0 Authentication Strategy
//======================================================

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3030/api/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, cb) {
    //console.log('callback function fired')
    console.log(profile)
    db.User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
  ));
  
  router.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
    );
  
  router.get('/google/redirect', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('http://localhost:3000/');
      
  });
  
  router.get('/testauth', (req, res) => {
    console.log("REQ.USER EXISTS? : " + req.user);
    if(req.user){
      //console.log('authenticated user: ' + req.user)
      res.json(req.user)
    }else {
      res.status(404).json({message: 'no user loggedin'});
      //console.log('no user authenticated')
    }
  });

  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      res.redirect('http://localhost:3000/')
    })
  })


module.exports = router;
