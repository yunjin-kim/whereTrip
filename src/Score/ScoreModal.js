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


  // const [oneStar, setOneStar] = useState(false);
  // const [twoStar, setTwoStar] = useState(false);
  // const [threeStar, setThreeStar] = useState(false);
  // const [fourStar, setFourStar] = useState(false);
  // const [fiveStar, setFiveStar] = useState(false);

  // const ClickOneStar = () => {
  //   setPostScore(1);
  //   setOneStar(true);
  //   setTwoStar(false);
  //   setThreeStar(false);
  //   setFourStar(false);
  //   setFiveStar(false);
  // }

  // const ClickTwoStar = () => {
  //   setPostScore(2);
  //   setOneStar(true);
  //   setTwoStar(true);
  //   setThreeStar(false);
  //   setFourStar(false);
  //   setFiveStar(false);
  // }

  // const ClickThreeStar = () => {
  //   setPostScore(3);
  //   setOneStar(true);
  //   setTwoStar(true);
  //   setThreeStar(true);
  //   setFourStar(false);
  //   setFiveStar(false);
  // }

  // const ClickFourStar = () => {
  //   setPostScore(4);
  //   setOneStar(true);
  //   setTwoStar(true);
  //   setThreeStar(true);
  //   setFourStar(true);
  //   setFiveStar(false);
  // }

  // const ClickFiveStar = () => {
  //   setPostScore(5);
  //   setOneStar(true);
  //   setTwoStar(true);
  //   setThreeStar(true);
  //   setFourStar(true);
  //   setFiveStar(true);
  // }

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
          {/* <FontAwesomeIcon icon={faStar} onClick={ClickOneStar} className={classnames('clickOneStar',{clickedOneStar : oneStar})} />
          <FontAwesomeIcon icon={faStar} onClick={ClickTwoStar} className={classnames('clickTwoStar',{clickedTwoStar : twoStar})}   />
          <FontAwesomeIcon icon={faStar} onClick={ClickThreeStar} className={classnames('clickThreeStar',{clickedThreeStar : threeStar})}   />
          <FontAwesomeIcon icon={faStar} onClick={ClickFourStar} className={classnames('clickFourStar',{clickedFourStar : fourStar})}   />
          <FontAwesomeIcon icon={faStar} onClick={ClickFiveStar} className={classnames('clickFiveStar',{clickedFiveStar : fiveStar})}   /> */}
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