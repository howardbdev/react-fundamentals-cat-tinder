import React from 'react'
import CatCard from './CatCard'


const NextUpCats = ({ cats }) => {
  const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)

    return (
      <div className="NextUpCats">
        { catCards }
      </div>
    )
}

export default NextUpCats
