import React from 'react'
import CatCard from './CatCard'
import { connect } from 'react-redux'
import { likeCat } from '../actions/cats'

function DisplayCat({
  cat,
  handleLikeClick,
  likeCat
}) {
  const style = {
    borderStyle: "solid",
    borderColor: "teal",
    borderWidth: "3px",
    borderRadius: "10px"
  }

  return (
    <div style={style} className="DisplayCat">
      <CatCard size={{maxHeight: 100, maxWidth: 100}} cat={cat}/>
      <button id={cat ? cat.id : "no-cat"} className="like-button" onClick={() => likeCat(cat)}>Like</button>
      <button id={cat ? cat.id : "no-cat"} className="dislike-button" onClick={handleLikeClick}>Dislike</button>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    cat: state.cats.filter(c=>c.status === "undecided")[0]
  })
}

export default connect(mapStateToProps, { likeCat })(DisplayCat)
