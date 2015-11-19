var mongoose = require('mongoose');
var counterSchema = new mongoose.Schema({
    _id: String,
    seq: Number
});
var counter = mongoose.model('counter', counterSchema)
var getNextId = function (name, callback) {
	counter.findOneAndUpdate(
		{ _id: name },
		{ $inc: { seq: 1 } },
		{ upsert: true, new: true },
		function (err, doc) {
			if(err) {
				callback(err, null);
			}
			console.log(doc);
			callback(null, name + "-" + doc.seq);
		});
};
module.exports = {
	getNextId: getNextId
}