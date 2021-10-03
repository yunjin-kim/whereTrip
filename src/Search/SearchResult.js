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
  return(
    <>
      <div className="resultWrap">
        {
          searchData.map((data)=>(
            <Card className="searchResultCard" key={data.id} style={{ width: '18rem' }}>
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
                    <span id={data.id} onClick={showScoreModal}>후기 작성</span>
                  </Card.Text>
                  <Card.Text>
                    <span>전체 후기 </span>
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