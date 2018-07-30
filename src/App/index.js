import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from '../HomePage';
import MoviePage from '../MoviePage';

// import "./style.css";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="main-wrapper">
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" exact component={MoviePage} />
        </div>
      </Router>
    )
  }
}

export default App;
