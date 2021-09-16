import React, { useState } from 'react'
import '../css/SearchForm.css';
import {InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchForm = ({searchKeyword}) => {
  const [searchText, setSearchText] = useState('');

  const searchInput = (e) => {
    console.log('searchInput')
    setSearchText(e.target.value);
  }

  const searchSubmit = (e) => {
    console.log('searchSubmit')
    e.preventDefault();
    searchKeyword(searchText);
  }

  return(
    <>
      <form onSubmit={searchSubmit} className="searchForm">
        <InputGroup className="mb-3" >
          <FormControl 
            className="searchInput"
            onChange={searchInput}
            placeholder="어디로 떠날까요?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button className="searchBtn" variant="outline-secondary" id="button-addon2" type="submit">
            떠나기
          </Button>
        </InputGroup>
      </form>
    </>
  )
}

export default SearchForm;