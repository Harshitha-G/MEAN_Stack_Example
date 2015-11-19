// server.js

// modules 
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');
	
// config files

var db = require('./config/db');
var userRoutes = require('./routes/userRoutes');
var storyRoutes = require('./routes/storyRoutes');
var index = require('./routes/index');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

//app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
//or app.use(express.static(path.join(__dirname, 'public')));

//api routes 
app.use('/api', index);

//user routes
app.use('/api/user', userRoutes);

//story routes
app.use('/api/story', storyRoutes);

// start app
app.listen(port,"localhost");							// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// show out to the user
exports = module.exports = app; 						// expose app