import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import data from '../../data/research.json';

const ResearchCard = () => {
  const [searchResults, setSearchResults] = useState(data); // data is the JSON data provided

  const handleSearch = (searchTerm) => {
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    });

    setSearchResults(filteredData);
  }

//   return (
//     <div>
//       <SearchBar data={data} onSearch={handleSearch} />
//       <div className='grid grid-cols-3 gap-4 m-6'>
//         {searchResults.map(item => (
//           <div key={item.id}>
//             {/* {data.map(item =>  */}
//               <Link href={(item.file)} key={item.id} class="flex flex-col items-enter bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel='noreferrer'>
//                 <Image
//                   className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
//                   src={(item.image)}
//                   alt={item.title}
//                   width={200}
//                   height={200}
//               />
//                 <div class="flex flex-col justify-between p-4 leading-normal">
//                     <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{(item.title)}</h5>
//                     <p className="font-medium text-gray-700 dark:text-gray-400">Researchers: {(item.author)}</p>
//                     <p className="font-normal text-gray-700 dark:text-gray-400">Category: {(item.category)}</p>
//                     <p className="font-normal text-gray-700 dark:text-gray-400">School Year: {(item.schoolYear)}</p>
//                 </div>
//               </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

return (
  <div>
    <SearchBar data={data} onSearch={handleSearch} />
    <div className='grid grid-cols-3 gap-4 m-6'>
      {searchResults.map(item => (
        <div key={item.id} >
          <Link href={item.file} key={item.id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel="noreferrer">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
              src={item.image}
              alt="Card Picture"
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              <p className="font-medium text-gray-700 dark:text-gray-400">Researchers: {item.author}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">Category: {item.category}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">School Year: {item.schoolYear}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)}

export default ResearchCard;




    