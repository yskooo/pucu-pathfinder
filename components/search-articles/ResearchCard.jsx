import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Data from '../../data/research.json';

const ResearchCard = () => {
  return (
    <>
    <article className='grid grid-cols-3 gap-4 m-6'>
      {Data.map(pdf => 
        <Link href={(pdf.file)} key={pdf.id} class="flex flex-col items-enter bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel='noreferrer'>
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
            src={(pdf.image)}
            alt="Card Picture"
            width={200}
            height={200}
            />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{(pdf.title)}</h5>
              <p className="font-medium text-gray-700 dark:text-gray-400">Researchers: {(pdf.author)}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">Category: {(pdf.category)}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">School Year: {(pdf.schoolYear)}</p>
          </div>
        </Link>
      )}
      </article>
    </>
  )
}

export default ResearchCard



