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

const storySchema = mongoose.Schema({
    userid: String,
    date: String,
    story: String
});

const Story = mongoose.model('Story', storySchema);

const moodSchema = mongoose.Schema({
    userid: String,
    date: String,
    moodvalue: { type: Number }
});

const Mood = mongoose.model('Mood', moodSchema);

module.exports = {
    Idea,
    Story,
    Mood
};