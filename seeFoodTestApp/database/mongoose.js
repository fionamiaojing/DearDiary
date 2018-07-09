const mongoose = require('mongoose');
const password = process.env.PASSWORD;
mongoose.connect(`mongodb://fiona:${password}@ds231501.mlab.com:31501/diary`);

const db = mongoose.connection;

const ideaSchema = mongoose.Schema({
    userid: String,
    date: String,
    idea: String
});

const Idea = mongoose.model('Idea', ideaSchema);

const stroySchema = mongoose.Schema({
    userid: String,
    date: String,
    story: String
});

const Story = mongoose.model('Story', ideaSchema);

const moodSchema = mongoose.Schema({
    userid: String,
    date: String,
    moodvalue: Number
});

const Mood = mongoose.model('Mood', ideaSchema);

module.exports = {
    Idea,
    Story,
    Mood
};