import Head from 'next/head';
import ResearchCard from '../components/search-articles/ResearchCard'

const Search = () => {
  return (
    <>
      <Head>
        <title>Pathfinder | Articles</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pucu.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
        <script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
      </Head>
     <main className='contain min-h-screen'>
           <ResearchCard/>
      </main>
    </>
  
  )
}

export default Search
