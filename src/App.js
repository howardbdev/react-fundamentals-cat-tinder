import React, { Component } from 'react';
import './App.css';
import Cats from './components/Cats'
import CenterContainer from './components/CenterContainer'

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
    if (event.target.tagName === "IMG") {newStatus = "undecided"}
    else {newStatus =  event.target.className === "like-button" ? "liked" : "disliked"}
    const cats = this.state.cats.map(cat => {
      if (parseInt(cat.id) === parseInt(event.target.id) || cat.id == event.target.className) {
        const newCat = Object.assign({}, cat)
        newCat.status = newStatus
        this.updateCat(newCat)
        return newCat
      } else {
        return cat
      }
    })
    this.setState({
      cats: cats
    })
  }

  updateCat = (cat) => {
    const headers = {
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ cat })
    }

    fetch(`http://localhost:3001/cats/${cat.id}`, headers)
      .then(r => r.json())
      .then(console.log)
  }

  handleSubmit = (event, formData) => {
    event.preventDefault()
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:3001/cats", headers)
      .then(r => r.json())
      .then(cat => this.setState({
        cats: [...this.state.cats, cat]
      }))
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
          cats={this.state.cats.filter(cat => cat.status === "undecided")}
          addCat={this.handleSubmit}
        />
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
