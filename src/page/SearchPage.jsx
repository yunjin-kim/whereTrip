import React, { useState } from "react";
import SearchForm from '../components/Search/SearchForm';
import SearchKeyword from '../components/Search/SearchKeyword';
import KakaoApi from "../Api/KakaoApi.jsx";
import '../css/SearchPage.css'

//메인 페이지 가능성이 높아 기능별로 컴포넌트를 나눔
//나중에 컴포넌트만 추가하면 밑에 페이지를 더 보여줄 수 있게
const SearchPage = () => {
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [cleanKeyword, setCleanKeyword ] = useState('')
  const [resetResult, setRestResult] = useState(false)

  //키워드 검색하고 폼에서 검색할 때 키워드 다시 1deps로
  const checkSubmit = (clickSubmit) => {
    setCleanKeyword(clickSubmit)
  }

  const homeButtonClick = () => {
    setSearchedKeyword('')
    setCleanKeyword({
      cleanKeyword: ''
    });
    setRestResult(false)
  }

  return(
    <>
      <h2 onClick={() => homeButtonClick()} className="title">어디로여행</h2>
      <SearchForm setSearchedKeyword={setSearchedKeyword} checkSubmit={checkSubmit} searchedKeyword={searchedKeyword} />
      <SearchKeyword setSearchedKeyword={setSearchedKeyword} cleanKeyword={cleanKeyword} />
      <KakaoApi searchedKeyword={searchedKeyword} resetResult={resetResult} setRestResult={setRestResult} />
    </>
  )
}

export default SearchPage;