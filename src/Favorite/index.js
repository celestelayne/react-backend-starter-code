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
      <div className="FavoritePage">
      {this.state.favorites.map((favorite, index) => {
        return (
          <div key={index}>
            <p>{favorite.title}</p>
            <p>{favorite.runtime}</p>
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
