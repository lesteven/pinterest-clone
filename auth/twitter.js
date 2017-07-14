var passport = require('passport');
var User = require('../models/user');
var config = require('../config.js');
var TwitterStrategy  = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: (process.env.KEY || config.KEY),
    consumerSecret: (process.env.SECRET|| config.SECRET),
    callbackURL: config.URL
  },
  function(accessToken, refreshToken, profile, done) {

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      twitterID: profile.id
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  User.findById(obj,(err,user)=>{
    cb(err,user);
  });
});

module.exports = passport;