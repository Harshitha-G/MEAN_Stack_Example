var router = require('express').Router();
var stories = require('../models/stories');
var counter = require('../models/counter');

router.get('/', function(req, res) {
	stories.find(function (err, doc) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)
		//res.json(doc); // return all stories data in JSON format
		res.send({
			record: null,
			records: doc
		});
	});
});
router.get('/:id', function (req, res) {
	console.log(req.params.id);
	stories.find({_id: req.params.id }, function(err, doc) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err)
		res.send({
			record: doc[0],
			records: null
		});
	});
});
router.post('/insertStory', function (req, res) {
	var id = counter.getNextId('story', function (err, id) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			console.log(id);
			req.body._id = id;

			req.body.status = "open";
			var newStory = new stories(req.body);
			newStory.save(function (err, doc) {
				if (err) {
					console.log(err);
					res.send(err);
				}
				console.log('Story added successfully');
				console.log(doc);
				res.send(id);
			});
		}
	});
});

module.exports = router;