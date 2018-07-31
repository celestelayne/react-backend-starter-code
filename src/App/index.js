import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from '../HomePage';
import MoviePage from '../MoviePage';
import Favorite from '../Favorite';

// import "./style.css";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          <nav className="navbar is-transparent level">
            <div className="navbar-brand level-left">
              <Link className="navbar-item" to="/">Movie Finder</Link>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu level-right is-hoverable">
              <Link className="navbar-item" to="/favorites">Favorite Movies</Link>
            </div>
          </nav>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" exact component={MoviePage} />
          <Route path="/favorites" exact component={Favorite} />
        </div>
      </Router>
    )
  }
}

export default App;
