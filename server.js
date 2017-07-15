//server
var express = require('express');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
var port = process.env.PORT || 3000;
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(require('cookie-parser')());

//database
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/pinterest'
var promise = mongoose.connect(url,{
	useMongoClient:true,
})
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
	console.log('Connected correctly to server');
})

//passport
var passport = require('passport');
app.use(require('express-session')({
  secret: '9054f3048dgfd',
  resave:true,
  saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());


//routers
var authRouter = require('./routes/authRouter');

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(__dirname + '/dist'));
app.use('/',express.static(__dirname + '/public'));

app.use('/auth', authRouter);


//redirect  to client
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})

