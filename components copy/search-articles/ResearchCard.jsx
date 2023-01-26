import React from 'react';
import Link from 'next/link';
import data from '../../data/research.json';

export const ResearchCard = () => {
  return (
    // <div style={{color:'white'}}>
    //   {Data.map(pdf => (
    //     <article>
    //       <small>{pdf.title}</small>
    //       <p>{pdf.write}</p>
    //       <img src={pdf.image} width={250} height={300} />
    //       <a href={pdf.file}>Download</a>
    //     </article>
    //   ))}
    // </div>

    <div>
      {data.map(pdf => 
      <a key={id} href={data.map(pdf => pdf.file)} class="flex flex-col items-enter bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hocver:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel='noreferrer'>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
        src={data.map(pdf => pdf.image)}
        alt="Card Picture"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.map(pdf => pdf.title)}</h5>
            <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">Researchers: {data.map(pdf => pdf.author)}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {data.map(pdf => pdf.category)}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">School Year: {data.map(pdf => pdf.schoolYear)}</p>
        </div>
      </a>
      )}
    </div>
  )
}