var mongoose = require('mongoose');
var storySchema = new mongoose.Schema({
    _id: String,
    title: String,
    desc: String,
    assignee: String,
    status: String,
    storyPoints: Number,
    estimatedHours: Number,
    loggedHours: Number,
    attachements: [],
    date: Date
});
module.exports = mongoose.model('stories', storySchema);