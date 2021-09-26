import React from 'react';

const KeywordLocation = ({location, onKeyword}) => {
  
  const keywordClick = (e) => {
    onKeyword(e.target.id)
  }

  return(
    <>
      <button className="keywordBtn" onClick={keywordClick} id={location.name} >
        {location.name}
      </button>
    </>
  )
}

export default KeywordLocation;