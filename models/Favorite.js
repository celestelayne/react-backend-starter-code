const db = require('../database/connection');

const Favorite = {};

Favorite.all = () => {
  return db.any('SELECT * FROM favorites');
}

Favorite.create = favoriteMovie => {
  return db.one(`INSERT INTO favorites (title, year, rated, runtime, actors, genre, plot, released, poster, language) VALUES($<title>, $<year>, $<rated>, $<runtime>, $<actors>, $<genre>, $<plot>, $<released>, $<poster>, $<language>) RETURNING *`, favoriteMovie);
}

module.exports = Favorite;
