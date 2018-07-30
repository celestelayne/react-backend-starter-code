import React, { Component } from "react";
import { Link } from "react-router-dom";

// import SearchForm from '../SearchForm';
import Movie from '../Movie';

// import "./style.css";

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search for Movie:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Find Movie" />
        </form>
        <Movie data={this.state.movies.Search} />
      </div>
    );
  }
}

export default HomePage;
