import React, {useEffect, useState} from 'react';
import KeywordSection from './KeywordSection';
import KeywordLocation from './KeywordLocation';
import locationArr from '../data/keyword.json';
import '../css/SearchKeyword.css';

const SearchKeyword = ({getSearchData, cleanKeywrod}) => {
  const [clickKeyword, setClickKeyword] = useState('');

  useEffect(()=>{
    setClickKeyword('');
  },[cleanKeywrod])

  const onKeyword = (text) => {
    setClickKeyword(text)
    getSearchData(text);
  }
  return(
    <>
      {
        clickKeyword !== ''
        ? 
        <KeywordSection clickKeyword={clickKeyword} locationArr={locationArr} />
        : 
        (locationArr.location.map((location)=>(
          <KeywordLocation key={location.name} location={location} onKeyword={onKeyword} />
        )))
      }

      
    </>
  )
}

export default SearchKeyword;