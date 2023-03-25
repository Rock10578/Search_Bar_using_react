import React from 'react';
import "../App.css";

const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={(e)=>alert(`You CLicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default SearchResult
