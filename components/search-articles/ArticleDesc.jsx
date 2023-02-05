import React from 'react'

const ArticleDesc = () => {
  return (
    <div className='pt-8 mx-2 flex flex-col justify-center items-center text-center'>
      <h1 class="mb-4 mx-auto text-xl font-md tracking-tight leading-none text-gray-800 md:text-lg lg:text-4xl dark:text-white max-w-screen-lg">
        Discover related articles efficiently with PUCU Pathfinder
      </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        With 135+ million publication pages, 20+ million researchers and 1+ million questions, this is where everyone can access science
        </p>
        <p className="mb-8 text-md font-light text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
        You can use AND, OR, NOT, and () to specify your search.
        </p>
    
    </div>
  )
}

export default ArticleDesc
