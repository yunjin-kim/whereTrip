import React, {useState, useEffect} from "react";
import '../css/ScoreModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ScoreModal = ({setScoreModal}) => {
  let [postScore, setPostScore] = useState(0);
  const [clickStar, setClickStar] = useState('');

  const scoreModalClose = () => {
    setScoreModal(false);
  }

  console.log(postScore)


  // useEffect(() => {
  //   clickStar.map((star)=>{
  //     if(star === "yesClick"){
  //       setPostScore(postScore++);
  //     }
  //     else{
  //       setPostScore(postScore--);
  //     }
  //   })
  // }, [setClickStar])



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
        <textarea></textarea>
        <button>작성</button>
      </div>
    </>
  )
}

export default ScoreModal;