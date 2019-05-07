import React from 'react'
import CatCard from './CatCard'

function DisplayCat({ cat }) {
  const style = {
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: "1px"
  }

  return (
    <div style={style} className="DisplayCat">
      <CatCard cat={cat}/>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  )
}

export default DisplayCat
