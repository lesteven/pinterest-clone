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
    
    var account = {
      name: profile.displayName,
      twitterID: profile.id
    };

    User.findOne({twitterID: profile.id}, function(err, user) {
     // console.log('done',done)
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