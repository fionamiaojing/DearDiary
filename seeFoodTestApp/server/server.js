require('dotenv').config();
const express = require('express');
const app = express();
const helper = require('./helper');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/ideas/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    helper.fetchIdea({ userid, date })
        .then(( result ) => {
            res.status(200).send(result);
        })
        .catch(( err ) => {
            res.status(400).send();
        });
});

app.post('/ideas/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    let { idea } = req.body;
    helper.postIdea({ userid, date, idea})
        .then((result) => {
            res.status(200).send('posted');
        })
        .catch((error) => {
            res.status(400).send('error');
        });
});

app.delete('/ideas/:ideaid', (req, res) => {
    let { ideaid } = req.params;
    helper.deleteIdea(ideaid)
        .then((result) => {
            res.status(200).send('deleted');
        })
        .catch((error) => {
            res.status(400).send('error');
        });
});

app.get('/mood/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    helper.fetchMood({ userid, date })
        .then((result) => {
            let re = result.length > 0 ? result.slice(result.length - 1) : [];
            res.status(200).send(re);
        })
        .catch((error) => {
            res.status(400).send();
        });
});

app.post('/mood/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    let { value } = req.body;
    helper.postMood({userid, date, value})
        .then((result) => {
            res.status(200).send('posted');
        })
        .catch((error) => {
            res.status(400).send('error');
        });
});

app.get('/stories/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    helper.fetchStory({ userid, date })
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(400).send('error');
        });
});

app.post('/stories/:userid/:date', (req, res) => {
    let { userid, date } = req.params;
    let { story } = req.body;
    helper.fetchStory({ userid, date})
        .then((result) => {
            if (result.length === 0) {
                return helper.postStory({ userid, date, story});
            }
            return helper.updateStory({ userid, date, story});
        })
        .then((result) => {
            res.status(200).send('finished');
        })
        .catch((error) => {
            res.status(400).send('error');
        });
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
