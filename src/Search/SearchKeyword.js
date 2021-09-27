import React, {useEffect, useState} from 'react';
import KeywordSection from './KeywordSection';
import KeywordLocation from './KeywordLocation';
import locationArr from '../data/keyword.json';
import '../css/SearchKeyword.css';

const SearchKeyword = ({getSearchData, cleanKeyword}) => {
  const [clickKeyword, setClickKeyword] = useState('');
  
  console.log("clickKeyword")
  console.log(clickKeyword)

  useEffect(()=>{
    setClickKeyword('');
  },[cleanKeyword])

  const onKeyword = (text) => {
    setClickKeyword(text)
    getSearchData(text);
  }
  
  return(
    <div className="keywordWrap">
      {
        clickKeyword !== ''
        ? 
        <KeywordSection clickKeyword={clickKeyword} locationArr={locationArr} onKeyword={onKeyword} />
        : 
        (locationArr.location.map((location)=>(
          <KeywordLocation key={location.name} location={location} onKeyword={onKeyword} />
        )))
      }      
    </div>
  )
}

export default SearchKeyword;