import React, { Fragment, Component } from 'react';
import './App.css';
import Cats from './components/Cats'
import DisplayCat from './components/DisplayCat'
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
        { this.state.cats.length == 0
            ? "LOADING..."
            : <Fragment>
                <div className="LikedCats">Liked</div>
                <DisplayCat cat={this.state.cats[0]}/>
                <div className="DislikedCats">Disliked</div>
            </Fragment>
      }
        <Cats cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;
