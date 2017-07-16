var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('./post.js')

var User = new Schema({
	username:String,
	name:String,
	twitterID: String,
	posts:[{type:Schema.Types.ObjectId,ref:'Post'}]
})

module.exports = mongoose.model('Users',User)