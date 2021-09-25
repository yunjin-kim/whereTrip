import React, {useState} from 'react';
import '../css/SearchKeyword.css';

const SearchKeyword = ({getSearchData}) => {
  // const [clickKeyword, setClcikKeyword] = useState('');
  const keywordArray = ['강릉', '속초', '양양']

  //키워드를 어떻게 선정?
  //키워드 배열? JSON에서 받아오기?
  //강원도, 경상도, 제주도
  //강릉, 속초. 제주도, 
  //카페, 맛집, 공원, 호텔, 편의점, 
  const keywordClick = (e) => {
    getSearchData(e.target.id)
  }
  // console.log(clickKeyword)


//나중에 배열을 맵해서 키워드 데이터를 id에 넣어줘서 클릭하면 버튼 id 값이 전달될 수 있게
  return(
    <>
    {
      keywordArray.map((keyword)=>(
        <button className="button" key={keyword} id={keyword} onClick={keywordClick}>{keyword}</button>
      ))
    }
      

    </>
  )
}

export default SearchKeyword;