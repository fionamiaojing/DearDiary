const express = require('express');
const app = express();

app.use(express.json());

app.get('/ideas/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    console.log( userid, date);
});

app.post('/ideas', (req, res) => {
    let { userid, date, idea } = req.body;
    console.log(userid, date, idea);
});

app.delete('/ideas', (req, res) => {
    let { ideaID } = req.body;
    console.log(ideaID);
});

app.get('/mood/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    console.log( userid, date);
});

app.post('/mood', (req, res) => {
    let { userid, date, mood } = req.body;
    console.log(userid, date, mood);
});

app.get('/stories/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    console.log( userid, date);
});

app.post('/stories', (req, res) => {
    let { userid, date, story } = req.body;
    console.log(userid, date, story);
});

app.get('/pictures/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    console.log( userid, date);
});

app.post('/pictures', (req, res) => {
    let { userid, date, picture } = req.body;
    console.log(userid, date, picture);
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
