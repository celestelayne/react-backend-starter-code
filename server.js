// Get the express module.
const express = require('express');
// require Movie model
const Movie = require('./models/Movie');
// Create a new Express application (web server)
const app = express();

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

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



// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
