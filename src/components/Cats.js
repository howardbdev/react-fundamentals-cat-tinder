import React from 'react'
import CatCard from './CatCard'


const Cats = ({ cats, handleChangeOfHeart, disliked }) => {
  const catCards = cats.map(cat =>
    <CatCard
      handleChangeOfHeart={handleChangeOfHeart}
      key={cat.name}
      cat={cat}
    />)

    return (
      <div className={disliked ? "DislikedCats" : "LikedCats"}>
        <h2>{disliked ? "Disliked Cats" : "Liked Cats"}</h2>

        { catCards }
      </div>
    )
}

export default Cats
