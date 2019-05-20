import React from 'react'
import DisplayCat from './DisplayCat'
import NextUpCats from './NextUpCats'
import UploadCatForm from './UploadCatForm'


const CenterContainer = (props) => {

  return (
    <div className="CenterContainer">
      <DisplayCat
        handleLikeClick={props.handleLikeClick}
      />
      <NextUpCats/>
      <UploadCatForm/>
    </div>
  )

}

export default CenterContainer
