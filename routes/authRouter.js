var express = require('express');
var authRouter = express.Router();
var passportTwitter = require('../auth/twitter')


authRouter.route('/')
.get(passportTwitter.authenticate('twitter'))

authRouter.route('/callback')
.get(passportTwitter.authenticate('twitter',{
    failureRedirect: '/failed'
  }),
  function(req,res){
    res.redirect('/');
  }
)


module.exports = authRouter;