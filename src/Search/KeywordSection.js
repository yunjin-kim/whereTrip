import React from "react";
import KeywordSectionButton from "./KeywordSectionButton";

const KeywordSection = ({clickKeyword, locationArr, onKeyword}) => {

  return(
    <>
      {
        locationArr.location.map((loc)=>(
          loc.name === clickKeyword
          ? <KeywordSectionButton section={loc.section} key={loc} onKeyword={onKeyword} clickKeyword={clickKeyword} />
          : null
        ))
      }
    
    </>
  )
}

export default KeywordSection;