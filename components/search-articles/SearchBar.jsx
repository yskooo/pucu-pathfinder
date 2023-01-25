import React from 'react'
import Image from 'next/image'
import data from '../../data/research'
const pdfs = [{
  title:"A Quantitative Study about Youtube College Vlogs blablabla - Hi crush ang ganda mo po",
  author:"12 STEM-1",
  schoolYear:"2022-2023",
  file:"/pdfs/A Quantitative Study about Youtube College Vlogs.pdf",
  Image:"/img/wuwu.jpeg",  
}]
const SearchBar = (data) => {
  return (
    // <div>
    //   <div style={{width:'100px',height:'50px'}}>
    //     <h1>this is the research title</h1>
    //     <a href={pdfs.map(pdf => pdf.file)}>View pdf file {pdfs.map(pdf => pdf.author)}</a>
    //     <img src={pdfs.map(pdf=> pdf.image)} alt="" />
    //   </div>
    // </div>

    <div>
      <a href={pdfs.map(pdf => pdf.file)} class="flex flex-col items-enter bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hocver:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel='noreferrer'>
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
        // loader={myLoader}
        src={pdfs.map(pdf => pdf.Image)}
        alt="Card Picture"
        width={500}
        height={500}
      />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pdfs.map(pdf => pdf.title)}</h5>
            <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">Researchers: {pdfs.map(pdf => pdf.author)}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">School Year: {pdfs.map(pdf => pdf.schoolYear)}</p>
        </div>
      </a>
    </div>
  )
}

export default SearchBar
