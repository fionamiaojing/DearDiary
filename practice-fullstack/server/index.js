const express = require('express');
const helper = require('../helpers/TMDB.js');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/movies', function (req, res) {
  helper.getMovieIDByUserInput(req.body.data, (id) => {
    helper.getMovieDetailByMovieID(id, (data) => {
      helper.insertDataIntoDataBase(data, (err, result) => {
        if (err) {
          res.status(400).send('BAD REQUEST');
        } else {
          res.status(201).send('CREATED');
        }
      });
    });
  });
});

app.get('/movies', function (req, res) {
  // TODO - your code here!
  db.find((err, results) => {
    if (err) {
      res.send('NOT FOUND');
    } else {
      res.send(results);
    }
  });
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

