import React from 'react';
import '../css/SearchResult.css';
import {Card } from 'react-bootstrap'

const SearchResult = ({searchData}) => {
  console.log(searchData)
  return(
    <>
      <div className="resultWrap">
      {
        searchData.map((data)=>(
          <Card className="searchResultCard " style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Link href="{data.place_url}">{data.place_name}</Card.Link>
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