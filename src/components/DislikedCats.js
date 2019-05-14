import React from 'react'
import CatCard from './CatCard'


const DislikedCats = ({ cats, handleChangeOfHeart, disliked }) => {
  const catCards = cats.map(cat =>
    <CatCard
      handleChangeOfHeart={handleChangeOfHeart}
      key={cat.name}
      cat={cat}
    />)

    return (
      <div className="DislikedCats">
        <h2>{disliked ? "Disliked Cats" : "Liked Cats"}</h2>

        { catCards }
      </div>
    )
}

export default DislikedCats
