import React, { useCallback, useState } from 'react'
import '../css/SearchForm.css';
import {InputGroup, FormControl, Button } from 'react-bootstrap';


const SearchForm = ({getSearchData, checkSubmit}) => {
  const [searchText, setSearchText] = useState('');
  const [clickSubmit, setClickSubmit] = useState('');

  const searchInput = useCallback((e) => {
    setSearchText(e.target.value);
    setClickSubmit(e);
  },[])

  const searchSubmit = useCallback((e) => {
    e.preventDefault();
    getSearchData(searchText);
    checkSubmit(clickSubmit);
  },[searchText])

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
        </InputGroup>
        <Button className="searchBtn" variant="primary" size="lg" type="submit" active>
          떠나기
        </Button>
      </form>
    </>
  )
}

export default SearchForm;