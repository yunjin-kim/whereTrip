import React, {useState} from "react";
import '../css/ScoreModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames';

const ScoreModal = ({setScoreModal}) => {
  const [postScore, setPostScore] = useState(0);
  const scoreModalClose = () => {
    setScoreModal(false);
  }

  let starArr = [];
  const [clickStar, setClickStar] = useState(starArr);

  function clickStarOnOff(idx){
    let starClickArr = [];
    for(let i = 0; i < 5; i++){
      if(i <= idx){
        starClickArr.push('yesClick')
      }
      else{
        starClickArr.push('noClick')
      }
    }
    setClickStar(starClickArr)
  }

  return(
    <>
      <div className="scoreModal">
        <button className="scoreModalClose" onClick={scoreModalClose}>X</button>
        <div>
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarOnOff(0)} className={clickStar[0]} />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarOnOff(1)} className={clickStar[1]}   />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarOnOff(2)} className={clickStar[2]}   />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarOnOff(3)} className={clickStar[3]}   />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarOnOff(4)} className={clickStar[4]}   />
        </div>
        <textarea></textarea>
        <button>작성</button>
      </div>
    </>
  )
}

export default ScoreModal;