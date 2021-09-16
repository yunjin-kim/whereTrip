import React, { useState } from "react";
import SearchForm from './SearchForm';
import SearchKeyword from './SearchKeyword';
import SearchResult from './SearchResult';
import KakaoApi from "./KakaoApi";

//메인 페이지 가능성이 높아 기능별로 컴포넌트를 나눔
//나중에 컴포넌트만 추가하면 밑에 페이지를 더 보여줄 수 있게
const SearchPage = () => {
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const searchKeyword = (searchText) => {
    console.log("searchKeyword")
    const keyword = searchText;
    setSearchedKeyword('');
    setSearchedKeyword(searchedKeyword.concat(keyword));
  }

  return(
    <>
      <SearchForm searchKeyword={searchKeyword} />
      <SearchKeyword />
      <KakaoApi searchedKeyword={searchedKeyword} />
    </>
  )
}

export default SearchPage;