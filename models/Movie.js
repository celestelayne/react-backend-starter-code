const db = require('../database/connection');

const Movie = {};

Movie.all = () => {
  return db.any('SELECT * FROM movies');
}

Movie.find = id => {
  return db.one(`SELECT * FROM movies WHERE is_fav = $<is_fav>`, { is_fav: is_fav})
}

module.exports = Movie;
