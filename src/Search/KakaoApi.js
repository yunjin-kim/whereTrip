import React,{ useEffect, useState } from 'react';
import SearchResult from './SearchResult';
const { kakao } = window;

const KakaoApi = ({searchedKeyword}) => {
  const [searchData, setSearchData] = useState([]);
  const [clickPagination, setClickPagination] = useState('');
  const [clickNum, setCLickNum] = useState(0);
  
  //한번 검색 실패하면 계속 실패
  
  let ps = new kakao.maps.services.Places(); 

  useEffect(() => {
    console.log("useEffect")
    if(searchedKeyword){
      searchPlaces(searchedKeyword)
    }
  },[searchedKeyword])

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces() {
  
        if (!searchedKeyword.replace(/^\s+|\s+$/g, '')) {
          alert('키워드를 입력해주세요!');
          return false;
        }

        setSearchData([]);
        setCLickNum(0);
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch( searchedKeyword, placesSearchCB); 
    }
  
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      setClickPagination(pagination)
      if (status === kakao.maps.services.Status.OK) {
        setSearchData(prevData => prevData.concat(data));
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
    }

  const moreSearchResult = () => {
    setCLickNum(clickNum + 1);
  }

  if(clickNum === 1){
      clickPagination.gotoPage(2);
  }
  else if(clickNum === 2){
    clickPagination.gotoPage(3);
  }
  
  console.log("searchData")
  console.log(searchData)
  return(
    <>
      <SearchResult searchData={searchData} />
      <button onClick={moreSearchResult}>더보기</button>
    </>
  )
}

export default KakaoApi;