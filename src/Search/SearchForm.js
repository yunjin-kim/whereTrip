import React, { useCallback, useState } from 'react'
import '../css/SearchForm.css';
import {InputGroup, FormControl, Button } from 'react-bootstrap';


const SearchForm = ({getSearchData}) => {
  const [searchText, setSearchText] = useState('');
  // const [doSearch, setDoSearch] = useState(false);

  const searchInput = useCallback((e) => {
    setSearchText(e.target.value);
  },[])

  const searchSubmit = useCallback((e) => {
    // setDoSearch(true);
    e.preventDefault();
    getSearchData(searchText);
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