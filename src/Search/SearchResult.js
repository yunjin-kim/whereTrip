import React from 'react';
import '../css/SearchResult.css';
import {Card } from 'react-bootstrap'

const SearchResult = () => {

  return(
    <>
      <Card className="searchResultCard" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Link href="#">Card title</Card.Link>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default SearchResult;