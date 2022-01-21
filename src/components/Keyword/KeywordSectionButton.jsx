import React, { useState } from "react";
import '../../css/SearchKeyword.css';

const KeywordSectionButton = ({section, onKeyword, clickKeyword}) => {
  const [sectionClick, setSectionClick] = useState('');

  const sectionBtnClick = (e) => {
    setSectionClick(e.target.id)
    onKeyword(`${clickKeyword}${e.target.id}`);
  }

  return(
    <>
      {
        section.map((s)=>(
          <button className="keywordBtn" key={s} id={s} onClick={sectionBtnClick}>{s}</button>
        ))
      }
    </>
  )
}

export default KeywordSectionButton;