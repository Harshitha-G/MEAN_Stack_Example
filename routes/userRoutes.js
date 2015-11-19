var router = require('express').Router();
var users = require('../models/users');

router.get('/', function (req, res) {
	// use mongoose to get all user data in the database
	users.find({},{_id: 0, name: 1, email: 1},function(err, doc) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)
		res.json(doc); // return all users data in JSON format
	});
});

router.post('/insertUser', function (req, res) {
	req.body._id = req.body.email; 
	var newUser = new users(req.body);
	newUser.save(function (err) {
		if (err) {
			res.statusCode = 400;
			res.send(err);
		} else {
			console.log('user added successfully');
			res.send(newUser);
		}
	});
});

module.exports = router;