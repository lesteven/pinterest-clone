var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
	_creator:{type:String,ref:'User'},
	description:String,
	url:String,
	likes:[{type:Schema.Types.ObjectId,ref:'User'}]
})

module.exports = mongoose.model('Post',Post)