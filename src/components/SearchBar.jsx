import React from 'react'

export default function SearchBar(props) {
  const {onSearch} = props;
  return (
    <div>
        <label>Search</label>
        <br></br>
        <input type="text" onChange={(elem) => onSearch(elem.target.value)} />
    </div>
  )
}


