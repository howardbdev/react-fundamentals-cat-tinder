import React, { Fragment, Component } from 'react';
import './App.css';
import Cats from './components/Cats'
import CenterContainer from './components/CenterContainer'
import DisplayCat from './components/DisplayCat'
import LikedCats from './components/LikedCats'
import DislikedCats from './components/DislikedCats'
import cats from './cats-data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      cats: []
    }
  }

  // mocking a fetch request
  componentDidMount() {
    // fetch("www.mycats.com")
    //   .then(r=>r.json())
    //   .then(cats => this.setState({cats: cats}))
    this.setState({
      cats: cats
    })
  }

  render() {

    return (
      <div className="App">
        <LikedCats cats={cats.slice(0,2)}/>
        <CenterContainer cats={cats.slice(10,13)}/>
        <DislikedCats cats={cats.slice(4,8)}/>
      </div>
    );
  }
}

export default App;
