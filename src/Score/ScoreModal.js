import React, {useState} from "react";
import '../css/ScoreModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ScoreModal = ({setScoreModal}) => {
  const [postScore, setPostScore] = useState(0);

  const scoreModalClose = () => {
    setScoreModal(false);
  }

  // const ClickOneStar = () => {

  // }

  // const ClickTwoStar = () => {
    
  // }

  // const ClickThreeStar = () => {
    
  // }

  // const ClickFourStar = () => {
    
  // }

  // const ClickFiveStar = () => {
    
  // }

  return(
    <>
      <div className="scoreModal">
        <button className="scoreModalClose" onClick={scoreModalClose}>X</button>
        <div>
          <div>
            <input type="checkbox" id="ClickOneStar" />
            <label htmlFor="ClickOneStar" className="ClickOneStar"></label>
          </div>
          {/* <FontAwesomeIcon icon={faStar} onClick={ClickOneStar} className="ClickOneStar" />
          <FontAwesomeIcon icon={faStar} onClick={ClickTwoStar} className="ClickTwoStar"  />
          <FontAwesomeIcon icon={faStar} onClick={ClickThreeStar} className="ClickThreeStar"  />
          <FontAwesomeIcon icon={faStar} onClick={ClickFourStar} className="ClickFourStar"  />
          <FontAwesomeIcon icon={faStar} onClick={ClickFiveStar} className="ClickFiveStar"  /> */}
        </div>
        <textarea></textarea>
        <button>작성</button>
      </div>
    </>
  )
}

export default ScoreModal;