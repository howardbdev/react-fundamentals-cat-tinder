import React from 'react'
import DisplayCat from './DisplayCat'
import NextUpCats from './NextUpCats'
import UploadCatForm from './UploadCatForm'


const CenterContainer = (props) => {

  return (
    <div className="CenterContainer">
      <DisplayCat
        cat={props.cats[0]}
        handleLikeClick={props.handleLikeClick}
      />
      <NextUpCats cats={props.cats.slice(1, 4)}/>
      <UploadCatForm addCat={props.addCat}/>
    </div>
  )

}

export default CenterContainer
