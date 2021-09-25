import React from "react";
import KeywordSectionButton from "./KeywordSectionButton";

const KeywordSection = ({clickKeyword, locationArr}) => {
  console.log(locationArr.location)
  console.log((clickKeyword))
  return(
    <>
      {
        locationArr.location.map((loc)=>(
          loc.name === clickKeyword
          ? <KeywordSectionButton section={loc.section} />
          : null
        ))
      }
    
    </>
  )
}

export default KeywordSection;