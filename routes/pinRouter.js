var express = require('express');
var pinRouter = express.Router();
var Post = require('../models/post');
var User = require('../models/user');
var crud = require('./crudFunctions');


pinRouter.route('/')

.get(function(req,res){
	//console.log(req.user._id)
	getUserPins(req,res)
})
.post(function(req,res){	
	//console.log(req.user)
	User.findOne({_id:req.user._id},function(err,user){
		var pin = new Post({
			_creator: req.user._id,
			description: req.body.description,
			url:req.body.url,
			owner:req.user.username
		})
		pin.save(function(err){
			if(err) return handleError(err);
		})
		user.posts.push(pin)
		user.markModified('posts')
		user.save(function(){
			getUserPins(req,res)
		});
	})

})
.delete(function(req,res){
	//console.log(req.body)
	crud.delete(req,res,req.body.id,getUserPins)
})

function getUserPins(req,res){
	User
	.findOne({_id:req.user._id})
	.populate('posts')
	.exec(function(err,data){
		if(err) throw err
		//console.log('data',data)
		res.json(data.posts)
	})
}

module.exports = pinRouter;