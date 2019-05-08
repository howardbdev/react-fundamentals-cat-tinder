import React from 'react'
import CatCard from './CatCard'


const LikedCats = ({ cats }) => {
  const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)

    return (
      <div className="LikedCats">
        <h2>Liked Cats</h2>
        { catCards }
      </div>
    )
}

export default LikedCats
