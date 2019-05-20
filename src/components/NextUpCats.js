import React from 'react'
import CatCard from './CatCard'
import { connect } from 'react-redux'

const NextUpCats = ({ cats }) => {
  const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)

    return (
      <div className="NextUpCats">
        { catCards }
      </div>
    )
}

const mapStateToProps = state => {
  return ({
    cats: state.cats.filter(c=>c.status === "undecided").slice(1, 4)
  })
}

export default connect(mapStateToProps)(NextUpCats)
