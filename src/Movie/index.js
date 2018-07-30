import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

// import "./style.css";

class Movie extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    let movies = this.props.data;
    // console.log('in here:', this.props);
    return (
      <div className="HomePage">
        {movies && movies.map((movie, index) => {
          // console.log(movie)
          return (
            <div key={index}>
                <Link to={{
                      pathname: `/movies/${index}`,
                      state: { movies: movie }
                    }} >
                <figure className="image is-square">
                  <img src={movie.Poster} alt={movie.Title} />
                </figure>
              </Link>
            </div>
          )

        })}
      </div>
    );
  }
}
export default Movie;
