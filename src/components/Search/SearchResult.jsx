import React, { useCallback, useState } from 'react';
import { Card } from 'react-bootstrap'
// import ScoreModal from '../Score/ScoreModal';
import '../../css/SearchResult.css';

const SearchResult = React.memo(({ searchData }) => {
  // const [scoreModal, setScoreModal] = useState(false);
  // const [placeId, setPlaceId] = useState('')
// 
  // const showScoreModal = useCallback((e) => {
  //   setPlaceId(e.target.id)
  //   setScoreModal(true)
  // },[scoreModal])

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
                  {/* <Card.Text>
                    <span className="postscript" id={data.id} onClick={showScoreModal}>후기 작성</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="holePostscript">전체 후기 </span>
                  </Card.Text> */}
              </Card.Body>
            </Card>
          ))
        }
        {/* {
          scoreModal 
          ? <ScoreModal setScoreModal={setScoreModal} placeId={placeId} />
          : null
        } */}

      </div>
    </>
  )
})

export default SearchResult;