import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import "./style.css";

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
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
  }

  render() {
    let movies = this.state;
    console.log('returned:', movies);
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Search for Movie:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Find Movie" />
        </form>
    )
  }

}

export default SearchForm;
