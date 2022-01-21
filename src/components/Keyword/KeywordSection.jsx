import React from "react";
import KeywordSectionButton from "./KeywordSectionButton";

const KeywordSection = ({ clickKeyword, locationArr, onKeyword }) => {

  return(
    <>
      {
        locationArr.location.map((location) => (
          location.name === clickKeyword
          ? <KeywordSectionButton section={location.section} key={location} onKeyword={onKeyword} clickKeyword={clickKeyword} />
          : null
        ))
      }
    </>
  )
}

export default KeywordSection;