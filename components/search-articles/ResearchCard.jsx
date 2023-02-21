import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import data from '../../data/research.json';

const ResearchCard = () => {
  const [searchResults, setSearchResults] = useState(data); // data provided

  const handleSearch = (searchTerm) => {
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    });
    
    setSearchResults(filteredData);
  }

return (
  <div>
    <SearchBar data={data} onSearch={handleSearch}/>
    <article className='grid grid-cols-3 gap-4 m-6 sm:'>
      {searchResults.map(item => (
        <div key={item.id} >
          <Link href={item.file} key={item.id} className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel="noreferrer">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-lg font-serif tracking-tight text-gray-800 dark:text-white">{item.subjectTitle}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{item.type}</p>
              <p className="font-light text-gray-700 dark:text-gray-500">Researchers: {item.researchers}</p>
              <p className="font-light text-gray-700 dark:text-gray-400">A.Y. {item.AY}</p>
            </div>
          </Link>
        </div>
      ))}
    </article>
    
  </div>
)}

export default ResearchCard;




    