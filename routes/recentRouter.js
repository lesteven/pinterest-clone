var express = require('express');
var recentRouter = express.Router();
var Post = require('../models/post');
var crud = require('./crudFunctions');


recentRouter.route('/')

.get(function(req,res){
	findAllPosts(req,res)
})
.delete(function(req,res){
	crud.delete(req,res,req.body.id,findAllPosts)
})

function findAllPosts(req,res){
	Post
	.find({})
	.exec(function(err,post){
		if(err) throw err
		//console.log(post)
		res.json(post)
	})
}
module.exports = recentRouter;