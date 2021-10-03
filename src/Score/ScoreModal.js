import React, {useState} from "react";
import '../css/ScoreModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ScoreModal = ({setScoreModal}) => {

const scoreModalClose = () => {
  setScoreModal(false);
}

  return(
    <>
      <div className="scoreModal">
        <button className="scoreModalClose" onClick={scoreModalClose}>X</button>
        <div>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <textarea></textarea>
        <button>작성</button>
      </div>
    </>
  )
}

export default ScoreModal;