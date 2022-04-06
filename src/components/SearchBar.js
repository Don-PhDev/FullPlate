import React from 'react'

function SearchBar({placeholder, data}) {
  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} />
            <div className="SearchIcon">
            </div>
            <div className="dataResult"> </div>
        </div>
        </div>
  )
}

export default SearchBar;