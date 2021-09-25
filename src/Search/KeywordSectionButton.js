import React from "react";
import '../css/SearchKeyword.css';

const KeywordSectionButton = ({section}) => {
  console.log(section)

  return(
    <>
      {
        section.map((s)=>(
          <button className="keywordBtn" key={s} >{s}</button>
        ))
      }
    </>
  )
}

export default KeywordSectionButton;