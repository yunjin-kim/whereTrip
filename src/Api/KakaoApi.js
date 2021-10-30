import React,{ useEffect, useState } from 'react';
import SearchResult from '../Search/SearchResult';
import '../css/SearchResult.css';
const { kakao } = window;

const KakaoApi = ({searchedKeyword}) => {
  const [searchData, setSearchData] = useState([]);
  const [clickPagination, setClickPagination] = useState('');
  const [clickNum, setCLickNum] = useState(0);
  const [clickBtnNum, setCLickBtnNum] = useState(0);
  const [moreBtn, setMoreBtn] = useState(false);

  let ps = new kakao.maps.services.Places(); 

  console.log(searchData)

  useEffect(() => {
    if(searchedKeyword){
      console.log('___useEffect_____')
      searchPlaces(searchedKeyword)
      setMoreBtn(true);
    }
  },[searchedKeyword])

//더보기 버튼 누르고 추가 검색결과 로드되기전에 여러번 누르면 오류생김 꼭 그런건 아님 id가 겹쳐서 로드되는 오류 

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces() {
        if (!searchedKeyword.replace(/^\s+|\s+$/g, '')) {
          alert('키워드를 입력해주세요!');
          return false;
        }

        setSearchData([]);
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch(searchedKeyword, placesSearchCB); 
    }
  
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {

      setCLickNum(0);
      setCLickBtnNum(0)

      //검색하면 데이터가 처음에 빈값오로 오고 다음에 데이터의 값이 와서 배열만들어서 버튼 숨김유무 처리 ex)인천속초:19개
      const dataLength = [];

      setClickPagination(pagination)
      if (status == kakao.maps.services.Status.OK) {
        setSearchData(prevData => prevData.concat(data));
        dataLength.push(data.length);
        
        if(dataLength[0] < 15){
          setMoreBtn(false);
        }
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
    if(searchData.length === 15){
      clickPagination.gotoPage(2);
    }
    if(searchData.length === 30){
      clickPagination.gotoPage(3);
      setCLickBtnNum(clickBtnNum + 2);
    }
  }

  //카카오api render할 때 다른 동작하면 오류
  if(clickBtnNum === 2){
    setTimeout(()=>{
      setMoreBtn(false);
    },500)
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