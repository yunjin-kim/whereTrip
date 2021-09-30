import React from 'react';
import {Card } from 'react-bootstrap'
import '../css/SearchResult.css';

const SearchResult = ({searchData}) => {

  return(
    <>
      <div className="resultWrap">
        {
          searchData.map((data)=>(
            <Card className="searchResultCard" key={data.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default SearchResult;