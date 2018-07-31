import React, { Component } from "react";

class Favorite extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    fetch('/favorites.json')
      .then(response => response.json())
      .then(favorites => {
        console.log(favorites)
        this.setState({
          favorites: favorites
        });
      });
  }

  render() {

    return(
      <div className="FavoritePage columns is-multiline">
      {this.state.favorites.map((favorite, index) => {
        return (
          <div key={index} className="card column is-one-quarter-desktop is-half-tablet">
            <p className="title is-4">{favorite.title}</p>
            <p className="subtitle is-6">{favorite.runtime}</p>

              <p>{favorite.genre}</p>
              <p>{favorite.rated}</p>
              <p>{favorite.year}</p>
          </div>
        )
      })}
      </div>
    )

  }
}

export default Favorite;
