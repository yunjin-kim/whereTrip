import React, {useState} from 'react';
import KeywordSection from './KeywordSection';
import KeywordLocation from './KeywordLocation';
import locationArr from '../data/keyword.json';
import '../css/SearchKeyword.css';

const SearchKeyword = ({getSearchData}) => {
  const [clickKeyword, setClickKeyword] = useState('');

  // const keywordClick = (e) => {
  //   getSearchData(e.target.id);
  //   setClickKeyword(e.target.id);
  // }

  const onKeyword = (text) => {
    setClickKeyword(text)
    getSearchData(text);
  }
  
//나중에 상항연산자 : 뒤에 부분도 컴포넌트로 빼주기
//나중에 배열을 맵해서 키워드 데이터를 id에 넣어줘서 클릭하면 버튼 id 값이 전달될 수 있게
  return(
    <>
      {
        clickKeyword 
        ? 
        <KeywordSection clickKeyword={clickKeyword} locationArr={locationArr} />
        : 
        (locationArr.location.map((location)=>(
          <KeywordLocation location={location} onKeyword={onKeyword} />
        )))
      }

      
    </>
  )
}

export default SearchKeyword;