var express = require('express');
var pinRouter = express.Router();
var Post = require('../models/post');
var User = require('../models/user');

pinRouter.route('/')

.get(function(req,res){
	//console.log(req.user._id)
	User
	.findOne({_id:req.user._id})
	.populate('posts')
	.exec(function(err,data){
		if(err) throw err
		console.log(data)
		res.json(data.posts)
	})
})
.post(function(req,res){	
	User.findOne({_id:req.user._id},function(err,user){
		var pin = new Post({
			_creator: req.user._id,
			description: req.body.description,
			url:req.body.url
		})
		pin.save(function(err){
			if(err) return handleError(err);
		})
		user.posts.push(pin)
		user.markModified('posts')
		user.save();
		res.json(pin)
	})
})

pinRouter.route('/all')

.get(function(req,res){
	Post
	.populate('_url')
	.exec(function(err,post){
		if(err) throw err
		console.log(post)
		res.json(post)
	})
})
module.exports = pinRouter;