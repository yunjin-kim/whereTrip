import React from 'react'
import {InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchInput = () => {

  return(
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="어디로 떠날까요?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          떠나기
        </Button>
      </InputGroup>
    </>
  )
}

export default SearchInput;