import React, { Component } from "react";
import { Link } from "react-router-dom";

// import SearchForm from '../SearchForm';
import Movie from '../Movie';

import "./style.css";

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  handleSubmit(evt) {
    console.log('A name was submitted: ' + this.state.value);
    evt.preventDefault();

    console.log(this.state.value)

    let url =`http://www.omdbapi.com/?s=${this.state.value}&t=movie&apikey=4d9c54c4`;

    fetch(url).then(response => response.json())
    .then(movies => {
      this.setState({
        movies: movies
      })
    })
  }

  render() {
    // let movies = this.state.movies.Search;
    console.log('returned:', this.state.movies.Search);
    return (
      <section className="HomePage section">
        <form onSubmit={this.handleSubmit}>
            <input className="input" type="text" placeholder="Find a movie" value={this.state.value} onChange={this.handleChange} />
            <input className="button" type="submit" value="Find Movie" />
        </form>
        <div className="container">
          <Movie data={this.state.movies.Search} />
        </div>
      </section>
    );
  }
}

export default HomePage;
