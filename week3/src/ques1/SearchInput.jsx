import React from 'react'

const SearchInput = ({query,setQuery}) => {
  return (
    <div>
        <input value={query}
        onChange={(e)=>setQuery(e.target.value)}
        type="text" placeholder='Enter item to search for'/>
    </div>
  )
}

export default SearchInput