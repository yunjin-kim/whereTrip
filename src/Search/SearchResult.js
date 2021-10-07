import React, {useCallback, useState} from 'react';
import {Card } from 'react-bootstrap'
import '../css/SearchResult.css';
import ScoreModal from '../Score/ScoreModal';

const SearchResult = React.memo(({searchData}) => {
  const [scoreModal, setScoreModal] = useState(false);

  const showScoreModal = useCallback((e) => {
    console.log(e.target.id)
    setScoreModal(true)
  },[scoreModal])
//후기 작성 버튼 누르면 후기id에 검색결과 id를 넣어서 후기 작성완료하면 DB에서 구분
//키 값을 배열의 인덱스로한 이유는 만약 검색결과의 id로 한다면 가끔 카카오 검색결과를 불러오면 같은 검색결과 15개가 두번씩 불러와질 때가 있다 
//그럴 때 검색결과의 id로 한다면 key값이 겹치기 때문에 오류가 발생한다 배열의 인덱스로 하면 그런 오류를 방지할 수 있다 검색결과를 재배열 하지는 않기 때문에 배열의 인덱스를 키값으로 하는것이 좋은 선택?
  return(
    <>
      <div className="resultWrap">
        {
          searchData.map((data, idx)=>(
            <Card className="searchResultCard" key={idx} style={{ width: '18rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                  <a href={`https://place.map.kakao.com/${data.id}`} target="_blank">
                    {data.place_name}
                  </a>
                  <Card.Text>
                    {data.address_name}
                  </Card.Text>
                  <Card.Text>
                    {data.phone}
                  </Card.Text>
                  <Card.Text>
                    <span className="postscript" id={data.id} onClick={showScoreModal}>후기 작성</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="holePostscript">전체 후기 </span>
                  </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        {
          scoreModal 
          ? <ScoreModal setScoreModal={setScoreModal} />
          : null
        }

      </div>
    </>
  )
})

export default SearchResult;