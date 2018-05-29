const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

let getMovieIDByUserInput = (input, callback) => {

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.themoviedb.org/3/search/movie?',
    headers: {
      'User-Agent': 'request',
    },
    qs: {
      'api_key': config.TOKEN,
      'query': input
    }
  };

  request.get(options, (error, response, body) => {
    //get id and title
    const movie = JSON.parse(body).results[0];
    callback(movie.id);
  });
};

let getMovieDetailByMovieID = (movieID, callback) => {
  let options = {
    url: `https://api.themoviedb.org/3/movie/${movieID}?`,
    headers: {
      'User-Agent': 'request',
    },
    qs: {
      'api_key': config.TOKEN,
    }
  };

  request.get(options, (error, response, body) => {
    //get id and title
    callback(JSON.parse(body));
  });
};

let insertDataIntoDataBase = (
  {id, title, runtime, release_date, vote_average}, callback
) => {
  let data = {
    movieid: id,
    title: title,
    runtime: runtime,
    release_date: release_date,
    vote_average: vote_average,
    watched: false
  };
  db.save(data, callback);
};

module.exports = {
  getMovieIDByUserInput: getMovieIDByUserInput,
  getMovieDetailByMovieID: getMovieDetailByMovieID,
  insertDataIntoDataBase: insertDataIntoDataBase,
};