import React from 'react'
import Cats from './Cats'
import DisplayCat from './DisplayCat'
import NextUpCats from './NextUpCats'


class CenterContainer extends React.Component {


  render() {
    return (
      <div className="CenterContainer">
        <DisplayCat cat={this.props.cats[0]}/>
        <NextUpCats cats={this.props.cats.slice()}/>
      </div>
    )
  }
}

export default CenterContainer
