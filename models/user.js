var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name:String,
	twitterID: String
})

module.exports = mongoose.model('Users',User)