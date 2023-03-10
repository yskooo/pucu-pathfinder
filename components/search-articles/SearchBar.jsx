import { useState } from 'react';
import data from '../../data/research.json'



const SearchBar = ({ data, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = () => {
      const filtered = data.filter(item => item.includes(searchTerm));
      onSearch(filtered);
    }
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
        onSearch(searchTerm);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { 
      filteredData()
  }}

  return (
    <>
      <div>
      <form class="flex justify-center items-center">   
          <label for="simple-search" class="sr-only">Search related studies</label>
          <div class="w-4/5">
          <div class="relative inset-y-10 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
         </div>
              <input type="text" 
              onKeyPress={handleKeyPress}
                    onChange={handleSearch}
                    value={searchTerm}
                    id="simple-search" 
                    class="h-14 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" 
                    placeholder="Search related studies" 
                    required
                />
          </div>
          {/* <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-teal-700 rounded-md border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span class="sr-only">Search related studies</span>
          </button> */}
      </form>
    </div>
    </>
  )
}

export default SearchBar
