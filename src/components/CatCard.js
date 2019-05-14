import React from 'react'

const CatCard = function({ cat, handleChangeOfHeart }){
  let returnVal
  if (cat) {
    returnVal = <div className="CatCard">
                  <img
                    className={cat.id}
                    onClick={handleChangeOfHeart}
                    src={cat.image_url}
                    alt={cat.name}/>
                  <p>{cat.name}</p>
                </div>
  } else {
     returnVal = <div>
                   EMPTY or LOADING...
                </div>
  }
  return (
    returnVal
  )
}

export default CatCard
