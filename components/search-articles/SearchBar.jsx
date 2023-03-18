import { useState } from 'react';
import { Dropdown,DropdownComponent } from 'flowbite-react';
import data from '../../data/research.json'



const SearchBar = ({ data, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState();

    const filteredData = () => {
      // const filtered = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      const filtered = data.filter(item => item.subjectTitle.toLowerCase().includes(searchTerm.toLowerCase()));
      onSearch(filtered);
    }
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
        onSearch(searchTerm);
  }

    const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    };

  return (
    <>
      <div>
      <form class="flex justify-center items-center" onSubmit={handleSubmit}>   
          <label for="simple-search" class="sr-only">Search related studies</label>
          <div class="w-4/5">
          <div class="relative inset-y-10 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
         </div>
              <input type="text" 
                    onChange={handleSearch}
                    value={searchTerm}
                    id="simple-search" 
                    class="h-14 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" 
                    placeholder="Search related studies" 
                    required
                />
          </div>

          <DropdownComponent label="Dropdown">
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
</DropdownComponent>
      </form>
    </div>
    </>
  )
}

export default SearchBar
