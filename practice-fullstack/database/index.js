const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

let movieSchema = mongoose.Schema({
  // TODO: your schema here!
  movieid: Number,
  title: String,
  runtime: Number,
  release_date: Date,
  vote_average: Number,
  watched: Boolean
});

let Movie = mongoose.model('Movie', movieSchema);

let save = (data, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newMovie = new Movie(data);
  newMovie.save((err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

let find = (callback) => {
  Movie.find((err, movies) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, movies);
    }
  });
};

let update = (id, watched, callback) => {
  // var query = Movie.where({movieid: data.movieid});
  Movie.findOneAndUpdate({_id: id}, {watched: !watched}, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  save: save,
  find: find,
  update: update
};