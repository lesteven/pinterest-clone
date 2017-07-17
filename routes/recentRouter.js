var express = require('express');
var recentRouter = express.Router();
var Post = require('../models/post');

recentRouter.route('/')

.get(function(req,res){
	Post
	.find({})
	.exec(function(err,post){
		if(err) throw err
		console.log(post)
		res.json(post)
	})
})

module.exports = recentRouter;