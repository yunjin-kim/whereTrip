import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import SearchKeyword from './SearchKeyword';
import KakaoApi from "./KakaoApi";
import Crawling from "./Crawling";
import '../css/SearchPage.css'

//메인 페이지 가능성이 높아 기능별로 컴포넌트를 나눔
//나중에 컴포넌트만 추가하면 밑에 페이지를 더 보여줄 수 있게
const SearchPage = () => {
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [cleanKeywrod, setCleanKeyword ] = useState('')

  useEffect(()=>{
    setSearchedKeyword('');
  },[searchedKeyword])

  const checkSubmit = (clickSubmit) => {
    setCleanKeyword(clickSubmit)
  }

  const getSearchData = (searchText) => {
    console.log("getSearchData")
    setSearchedKeyword(searchedKeyword.concat(searchText));
  }
  console.log(searchedKeyword)

  return(
    <>
      <h2 className="title">어디로여행</h2>
      <SearchForm getSearchData={getSearchData} checkSubmit={checkSubmit} />
      <SearchKeyword getSearchData={getSearchData} cleanKeywrod={cleanKeywrod} />
      <KakaoApi searchedKeyword={searchedKeyword} />
      <Crawling />
    </>
  )
}

export default SearchPage;