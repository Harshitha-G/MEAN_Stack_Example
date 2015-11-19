var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema({
    email: {
			    type: String,
			    default: '',
			    trim: true
			},
    name: String,
    password: String,
    _id: String
});
module.exports = mongoose.model('users', usersSchema);