var express = require('express');
var pinRouter = express.Router();
var Post = require('../models/post');
var User = require('../models/user');

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
	deletePin(req,res,req.body.id)
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
function deletePin(req,res,id){
	Post.findOneAndRemove({_id:id})
	.exec(function(err,removed){
		User.findOneAndUpdate(
			{_id:req.user._id},
			{$pull:{posts:id}},
			{new:true},
			function(err,removed){
				if(err){console.log(err)}
					getUserPins(req,res)
			}
		)
	})
}
module.exports = pinRouter;