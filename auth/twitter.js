var passport = require('passport');
var User = require('../models/user');
//var config = require('../config.js');
var TwitterStrategy  = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.KEY //|| config.KEY),
    consumerSecret: process.env.SECRET //|| config.SECRET),
    callbackURL: 'https://stormy-badlands-58815.herokuapp.com/auth/twitter/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile.username)
    var account = {
      username: profile.username,
      name: profile.displayName,
      twitterID: profile.id
    };

    User.findOne({twitterID: profile.id}, function(err, user) {
      if(err) {
        return done(err);
      } 
      if(!user){
        User.create(account,function(err,newUser){
          return done(null,newUser)
        })
      }
      else {
        return done(null, user);
      }
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(obj, cb) {
  User.findById(obj,(err,user)=>{
    cb(err,user);
  });
});

module.exports = passport;