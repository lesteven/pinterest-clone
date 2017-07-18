var Post = require('../models/post');
var User = require('../models/user');
var mongoose = require('mongoose');


exports.delete = (req,res,id,cb) =>{
	Post.findOneAndRemove({_id:id})
	.exec(function(err,removed){
		User.findOneAndUpdate(
			{_id:req.user._id},
			{$pull:{posts:id}},
			{new:true},
			function(err,removed){
				if(err){console.log(err)}
					cb(req,res,req.user._id)
			}
		)
	})
}

exports.getUserPins = (req,res,id)=>{
	if(mongoose.Types.ObjectId.isValid(id)){
		User
		.findOne({_id:id})
		.populate('posts')
		.exec(function(err,data){
			if(err) throw err
			//console.log('data',data)
			console.log(data.posts)
			res.json(data.posts)
		})
	}
	else{
		res.json([])
	}

}