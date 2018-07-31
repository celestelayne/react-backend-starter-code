// Get the express module.
const express = require('express');
const bodyParser = require('body-parser');
// require Movie model
const Movie = require('./models/Movie');
const Favorite = require('./models/Favorite');
// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/movies.json', (request, response) => {
  Movie.all()
  .then(movieData => {
    console.log(movieData);
    response.json(movieData)
  });
});

app.get('/movies/:id.json', (request, response) => {
  Movie.find(request.params.id)
  .then(data => {
    response.json(data)
  })
})

app.get('/favorites.json', (request, response) => {
  Favorite.all()
  .then(data => {
    console.log(data);
    response.json(data)
  });
});

app.post('/favorites', (request, response) => {
  console.log('reqs: ', request.body)
  const favoriteMovie = {
    id: request.body.id,
    genre: request.body.genre,
    poster: request.body.poster,
    title: request.body.title,
    year: request.body.year,
    runtime: request.body.runtime,
    rated: request.body.rated,
  };
  Favorite.create(favoriteMovie)
  .then(data => {
    console.log(data);
    response.json(data)
  })
})

// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
