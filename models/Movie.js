const db = require('../database/connection');

const Movie = {};

Movie.all = () => {
  return db.any('SELECT * FROM movies');
}

module.exports = Movie;
