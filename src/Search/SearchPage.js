import React from "react";
import SearchInput from './SearchInput';
import SearchKeyword from './SearchKeyword';
import SearchResult from './SearchResult';

//메인 페이지 가능성이 높아 기능별로 컴포넌트를 나눔
//나중에 컴포넌트만 추가하면 밑에 페이지를 더 보여줄 수 있게
const SearchPage = () => {

  return(
    <>
      <SearchInput />
      <SearchKeyword />
      <SearchResult />
    </>
  )
}

export default SearchPage;