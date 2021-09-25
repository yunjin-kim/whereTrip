import React, { useState } from "react";
import SearchForm from './SearchForm';
import SearchKeyword from './SearchKeyword';
import KakaoApi from "./KakaoApi";
import Crawling from "./Crawling";
import '../css/SearchPage.css'

//메인 페이지 가능성이 높아 기능별로 컴포넌트를 나눔
//나중에 컴포넌트만 추가하면 밑에 페이지를 더 보여줄 수 있게
const SearchPage = () => {
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const getSearchData = (searchText) => {
    console.log("getSearchData")
    const keyword = searchText;
    setSearchedKeyword('');
    setSearchedKeyword(searchedKeyword.concat(keyword));
  }

  return(
    <>
      <h2 className="title">어디로여행</h2>
      <SearchForm getSearchData={getSearchData} />
      <SearchKeyword getSearchData={getSearchData} />
      <KakaoApi searchedKeyword={searchedKeyword} />
      <Crawling />
    </>
  )
}

export default SearchPage;