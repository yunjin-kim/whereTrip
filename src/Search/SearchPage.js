import React, { useState } from "react";
import SearchForm from './SearchForm';
import SearchKeyword from './SearchKeyword';
import KakaoApi from "../Api/KakaoApi";
import '../css/SearchPage.css'

//메인 페이지 가능성이 높아 기능별로 컴포넌트를 나눔
//나중에 컴포넌트만 추가하면 밑에 페이지를 더 보여줄 수 있게
const SearchPage = () => {
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [cleanKeyword, setCleanKeyword ] = useState('')

  //키워드 검색하고 폼에서 검색할 때 키워드 다시 1deps로
  const checkSubmit = (clickSubmit) => {
    setCleanKeyword(clickSubmit)
  }
  //키워드 검색하고 인풋 검색하고 함수 따로 빼줘야 핳 듯?
  const getSearchData = (searchText) => {
    console.log("getSearchData")
    setSearchedKeyword(searchText);
  }

  return(
    <>
      <h2 className="title">어디로여행</h2>
      <SearchForm getSearchData={getSearchData} checkSubmit={checkSubmit} searchedKeyword={searchedKeyword} />
      <SearchKeyword getSearchData={getSearchData} cleanKeyword={cleanKeyword} />
      <KakaoApi searchedKeyword={searchedKeyword} />
    </>
  )
}

export default SearchPage;