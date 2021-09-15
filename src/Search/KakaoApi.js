import React,{ useEffect } from 'react';
const { kakao } = window;

const KakaoApi = ({searchedKeyword}) => {
  console.log("KakaoApi")
  let ps = new kakao.maps.services.Places();  

  useEffect(() => {
    searchPlaces(searchedKeyword)
    

    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces() {
  
      if (!searchedKeyword.replace(/^\s+|\s+$/g, '')) {
          alert('키워드를 입력해주세요!');
          return false;
      }
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch( searchedKeyword, placesSearchCB); 
    }
  
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status) {
  
      if (status === kakao.maps.services.Status.OK) {
        console.log(data)
      
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
    }

  }, [searchedKeyword])


  return(
    <>

    </>
  )
}

export default KakaoApi;