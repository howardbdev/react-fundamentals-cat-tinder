import React from 'react'
import CatCard from './CatCard'

function DisplayCat({
  cat,
  handleLikeClick
}) {
  const style = {
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: "1px"
  }

  return (
    <div style={style} className="DisplayCat">
      <CatCard size={{maxHeight: 100, maxWidth: 100}} cat={cat}/>
      <button id={cat ? cat.id : "no-cat"} className="like-button" onClick={handleLikeClick}>Like</button>
      <button id={cat ? cat.id : "no-cat"} className="dislike-button" onClick={handleLikeClick}>Dislike</button>
    </div>
  )
}

export default DisplayCat
