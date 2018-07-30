import React, { Component } from "react";

// import "./style.css";

class MoviePage extends Component {

    constructor(props) {
      super(props);

      this.state = {
        id: 0,
        title: "",
        year: "",
        rated: "",
        runtime: "",
        actors: "",
        genre: "",
        plot: "",
        released: "",
        poster: "",
        language: "",
        isToggleOn: true,
        saved: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
      evt.preventDefault();
      console.log('this button was clicked');

      const favoriteMovie = {
        id: this.state.id,
        actors: this.state.actors,
        genre: this.state.genre,
        language: this.state.language,
        plot: this.state.plot,
        poster: this.state.poster,
        rated: this.state.rated,
        released: this.state.released,
        runtime: this.state.runtime,
        title: this.state.title,
        year: this.state.year
      }

      console.log(favoriteMovie);

      fetch('/favorites', {
        method: 'POST',
        body: JSON.stringify(favoriteMovie),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json())
      .then(favorite => {
        this.setState({
          saved: true
        })
      })

      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    componentDidMount(){
      let id = this.props.location.state.movies.imdbID;
      // console.log(this.props.location.state.movies.imdbID)
      let url =`http://www.omdbapi.com/?i=${id}&apikey=4d9c54c4`;

      fetch(url)
      .then(response => response.json())
      .then(movie => {
        console.log(movie)
        this.setState({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          rated: movie.Rated,
          runtime: movie.Runtime,
          actors: movie.Actors,
          genre: movie.Genre,
          plot: movie.Plot,
          released: movie.Released,
          poster: movie.Poster,
          language: movie.Language
        });
      });
    }

    render() {
      const movie = this.props;
      console.log(movie)
      return (
        <div className="MoviePage">
          <div className="movie-details">
            <figure className="image is-square">
              <img src={this.state.poster} alt={this.state.title} />
            </figure>
            <h3>{this.state.title}</h3>
            <p>Year: {this.state.year}</p>
            <p>Rated: {this.state.rated}</p>
            <p>Runtime: {this.state.runtime}</p>
            <p>Plot: {this.state.plot}</p>
            <p>Language: {this.state.language}</p>
          </div>
          <button onClick={this.handleClick} >
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
      )
    }
}

export default MoviePage;
