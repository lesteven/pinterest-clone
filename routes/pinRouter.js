var express = require('express');
var pinRouter = express.Router();
var Post = require('../models/post');
var User = require('../models/user');

pinRouter.route('/')

.get(function(req,res){
	User
	.find()
	.populate('posts')
	.exec(function(err,post){
		if(err) throw err
			res.json(post)
		console.log(post)
	})
})
.post(function(req,res){
	console.log(req.user._id)
	var data = req.body;
	data._creator=req.user._id;

	/*
	Post.create(data,function(err,post){
		if(err) throw err;
	})*/
	
	User.findOne({_id:req.user._id},function(err,user){
		var test = new Post({
			_creator: req.user._id,
			description: req.body.description,
			url:req.body.url
		})
		test.save(function(err){
			if(err) return handleError(err);
		})
		console.log(test)
		user.posts.push(test)
		user.markModified('posts')
		user.save();
		res.json(test)
	})
})

module.exports = pinRouter;