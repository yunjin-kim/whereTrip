import React,{ useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import '../css/SearchResult.css';
const { kakao } = window;

const KakaoApi = ({searchedKeyword}) => {
  const [searchData, setSearchData] = useState([]);
  const [clickPagination, setClickPagination] = useState('');
  const [clickNum, setCLickNum] = useState(0);
  const [clickBtnNum, setCLickBtnNum] = useState(0);
  const [moreBtn, setMoreBtn] = useState(false);
  //검색하면 전에 값을 기억해서 전에 검색한거 새로 검색한거 이어서 검색결과 보여준다
  //ex)속초 검색하고 지우고 강릉 검색하면 속초강릉  이렇게  새로 검색할 때 기존꺼 삭제하는 함수
  //이것 때문에 한번 검색하면 ㄱㅖ속 실패한듯??
  //강릉을 클릭하면 강릉에 관한 것들이 나올 수 있도록 예를 들어 호텔, 바다, 카페 이렇게 키워드가 바뀔 수 있게
  //한번 검색 실패하면 계속 실패
  let ps = new kakao.maps.services.Places(); 

  useEffect(() => {
    console.log("useEffect")
    if(searchedKeyword){
      searchPlaces(searchedKeyword)
      setMoreBtn(true);
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
      ps.keywordSearch(searchedKeyword, placesSearchCB); 
    }
  
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      console.log("status")
      console.log(status)
      setClickPagination(pagination)
      if (status === kakao.maps.services.Status.OK) {
        setSearchData(prevData => prevData.concat(data));
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          status = null;
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
    }

  const moreSearchResult = () => {
    setCLickNum(clickNum + 1);
    setCLickBtnNum(clickBtnNum + 1);
  }

  if(clickNum === 1){
    clickPagination.gotoPage(2);
  }
  else if(clickNum === 2){
    clickPagination.gotoPage(3);
  }
  if(clickBtnNum === 2){
    //아마 카카오api로 무언가를 조작할 때 동시에 동작하려고 하면 오류가 난다
    setTimeout(()=>{
      setMoreBtn(false);
    },100)
    
  }
  
  return(
    <>
      <SearchResult searchData={searchData} />
      {
        moreBtn 
        ? <button className="moreBtn" onClick={moreSearchResult}>더보기</button>
        : null
      }
      
    </>
  )
}

export default KakaoApi;