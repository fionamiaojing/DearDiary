const mongoose = require('mongoose');
const db = require('./mongoose');
const Promise = require('promise');

let fetchIdea = ({ userid, date }) => {
    return new Promise((resolve, reject) => {
        db.Idea.find({ 
            userid: userid,
            date: date
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                //should be a bunch of results
                resolve(result);
            }
        });
    });
};

let postIdea = ({ userid, date, idea }) => {
    let newIdea = new db.Idea({
        userid: userid,
        date: date,
        idea: idea
    });
    return new Promise((resolve, reject) => {
        newIdea.save((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

let fetchMood = ({ userid, date }) => {
    return new Promise ((resolve, reject) => {
        db.Mood.find({ 
            userid: userid,
            date: date
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

let postMood = ({ userid, date, moodvalue }) => {
    let newMood = new db.Mood({
        userid: userid,
        date: date,
        moodvalue: moodvalue
    });
    return new Promise((resolve, reject) => {
        newMood.save((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

let updateMood = ({ userid, date, moodvalue }) => {
    return new Promise((resolve, reject) => {
        db.Mood.findOneAndUpdate({
            userid: userid,
            date: date
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

let fetchStory = ({ userid, date }) => {
    return new Promise ((resolve, reject) => {
        db.Story.find({ 
            userid: userid,
            date: date
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    fetchIdea,
    fetchMood,
    fetchStory,
    postIdea,
    postMood,
    updateMood
};

