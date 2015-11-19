var router = require('express').Router();
var users = require('../models/users');

router.post('/login', function (req, res) {
	// use mongoose to get all user data in the database
	users.find({email: req.body.email}, {_id: 0, name: 1, email: 1}, function(err, doc) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		console.log(doc);
		if (err)
			res.send(err)
		if (doc[0].password === req.body.password) {
			res.json(doc); // return all users data in JSON format
		} else {
			console.log(err);
		}
	});
});

module.exports = router;