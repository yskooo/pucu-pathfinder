import { useState } from 'react';
import data from '../data/research.json';
import Head from 'next/head';
import ArticleNav from '../components/search-articles/ArticleNav.jsx'
import ArticleDesc from '../components/search-articles/ArticleDesc.jsx';
import SearchBar from '../components/search-articles/SearchBar';
import Filter from '../components/search-articles/Filter';
import ResearchCard from '../components/search-articles/ResearchCard';

const Search = () => {
  const [item, setItem] = useState(data)
// SearchBar Component
  const [searchResults, setSearchResults] = useState(data); // data is the JSON data provided

  const handleSearch = (searchTerm) => {
  const filteredData = data.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  });
  
  setSearchResults(filteredData);
}
// Filter Component
  const menuItems = [...new Set(data.map((Value) => Value.category))];

  const filterItem = (curcat) => {
    const newItem = data.filter((newValue) => {
      return newValue.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <Head>
        <title>Pathfinder | Articles</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pathfinder.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
        <script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
      </Head>
      <nav className=''>
          <ArticleNav/>
      </nav>
     <main className='contain min-h-screen'>
          <ArticleDesc/>
           <ResearchCard item={item}/>
      </main>
    </>
  
  )
}

export default Search
