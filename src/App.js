import React, { Component } from 'react';
import './App.css';
import Cats from './components/Cats'
import CenterContainer from './components/CenterContainer'
import DisplayCat from './components/DisplayCat'

class App extends Component {
  constructor(){
    super()
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/cats")
      .then(r=>r.json())
      .then(cats => this.setState({cats: cats}))
  }

  handleLikeClick = (event) => {
    let newStatus
    if (event.target.tagName == "IMG") {newStatus = "undecided"}
    else {newStatus =  event.target.className === "like-button" ? "liked" : "disliked"}
    const cats = this.state.cats.map(cat => {
      if (cat.id == event.target.id || cat.id == event.target.className) {
        const newCat = Object.assign({}, cat)
        newCat.status = newStatus
        return newCat
      } else {
        return cat
      }
    })
    this.setState({
      cats: cats
    })
  }

  render() {

    return (
      <div className="App">
        <Cats
          handleChangeOfHeart={this.handleLikeClick}
          cats={this.state.cats.filter(cat => cat.status === "liked")}
        />
        <CenterContainer
          handleLikeClick={this.handleLikeClick}
          cats={this.state.cats.filter(cat => cat.status === "undecided")}/>
        <Cats
          disliked={true}
          handleChangeOfHeart={this.handleLikeClick}
          cats={this.state.cats.filter(cat => cat.status === "disliked")}
        />
      </div>
    );
  }
}

export default App;
