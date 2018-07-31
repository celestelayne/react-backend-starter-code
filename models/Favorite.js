const db = require('../database/connection');

const Favorite = {};

Favorite.all = () => {
  return db.any('SELECT * FROM favorites');
}

Favorite.create = favoriteMovie => {
  return db.one(
    `INSERT INTO
    favorites(genre, rated, runtime, title, year)
    VALUES($<genre>, $<rated>, $<runtime>, $<title>, $<year>) RETURNING id`, favoriteMovie);
}

module.exports = Favorite;
