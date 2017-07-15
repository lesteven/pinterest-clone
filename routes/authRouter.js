var express = require('express');
var authRouter = express.Router();
var passportTwitter = require('../auth/twitter')

authRouter.get('/user',function(req,res){
  if(req.user){
  	//res.json({name:req.user.name})
    res.json(req.user)
  }
  else{
  	res.json({})
  }
})

authRouter.get('/logout', function(req,res){
	req.logOut();
	res.clearCookie('connect.sid');
	res.redirect('/');
});

authRouter.route('/twitter')
.get(passportTwitter.authenticate('twitter'))

authRouter.route('/twitter/callback')
.get(passportTwitter.authenticate('twitter',{
    failureRedirect: '/'
  }),
  function(req,res){
    res.redirect('/');
  }
)


module.exports = authRouter;