import React, {useState, useEffect, useCallback} from "react";
import '../css/ScoreModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ScoreModal = ({setScoreModal, placeId}) => {
  let [postScore, setPostScore] = useState(0);
  const [scoreText, setScoreText] = useState('');
  const [clickStar, setClickStar] = useState('');

  const scoreModalClose = () => {
    setScoreModal(false);
  }

  function clickStarScroe(idx){
    setPostScore(0)
    let starNum = 0;
    let starClickArr = [];
    for(let i = 0; i < 5; i++){
      if(i <= idx){
        starClickArr.push('yesClick')
        starNum++;
      }
      else{
        starClickArr.push('noClick')
      }
    }
    setPostScore(starNum)
    setClickStar(starClickArr)
  }

  const writeScoreText = useCallback((e) => {
    setScoreText(e.target.value)
  },[scoreText])

  const submitScore = (e) => {
    e.preventDefault();
    setScoreModal(false);
    console.log(placeId, postScore, scoreText)
    //postScore, scoreText 보내는 코드
  }


  return(
    <>
      <div className="scoreModal">
        <button className="scoreModalClose" onClick={scoreModalClose}>X</button>
        <div>
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarScroe(0)} className={clickStar[0]} />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarScroe(1)} className={clickStar[1]}   />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarScroe(2)} className={clickStar[2]}   />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarScroe(3)} className={clickStar[3]}   />
          <FontAwesomeIcon icon={faStar} onClick={()=>clickStarScroe(4)} className={clickStar[4]}   />
        </div>
        <textarea className="scoreText" onChange={writeScoreText}></textarea>
        <button onClick={submitScore}>작성</button>
      </div>
    </>
  )
}

export default ScoreModal;