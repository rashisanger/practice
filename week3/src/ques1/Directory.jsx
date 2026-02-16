import React from 'react'
import { useSearch } from './useSearch';
import SearchInput from './SearchInput';
import Userlist from './Userlist';

const Directory = () => {
    const usersData = [
        { id: 1, name: "Rashi Sanger" },
        { id: 2, name: "John Doe" },
        { id: 3, name: "Jane Smith" },
        { id: 4, name: "Alice Johnson" },
        { id: 5, name: "Bob Brown" },
      ];

      const {query,setQuery,filteredItems}=useSearch(usersData,"name");
  return (
    <div>
        <h1>User Directory</h1>
        <SearchInput query={query} setQuery={setQuery}/>
        <Userlist users={filteredItems}/>
    </div>
  )
}

export default Directory