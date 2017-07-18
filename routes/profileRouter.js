var express = require('express');
var profileRouter = express.Router();
var crud = require('./crudFunctions');


profileRouter.route('/')

.get(function(req,res){
	var param = findParam(req)
	console.log(param)
	crud.getUserPins(req,res,param)
})

function findParam(req){
	var url = req.headers.referer
	//var regex = /\3000\/(.*)/
	var regex = /\.com\/(.*)/
	console.log(url,param)
	var param = regex.exec(url)[1]
	return param
}
module.exports = profileRouter;