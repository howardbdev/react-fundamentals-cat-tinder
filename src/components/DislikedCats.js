import React from 'react'
import CatCard from './CatCard'


const DislikedCats = ({ cats }) => {
  const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)

    return (
      <div className="DislikedCats">
        <h2>Disliked Cats</h2>

        { catCards }
      </div>
    )
}

export default DislikedCats
