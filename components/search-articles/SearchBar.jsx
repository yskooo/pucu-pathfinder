import React from 'react'
import data from '../../data/research'
const pdfs = [{
  title:"React",
  author:"12 STEM-1",
  schoolYear:"2022-2023",
  file:"/pdfs/A Quantitative Study about Youtube College Vlogs.pdf",
  image:"https://media.timeout.com/images/105240237/image.jpg"
}]
const SearchBar = (data) => {
  return (
    <div>
      <div style={{width:'100px',height:'50px'}}>
        <h1>wow searchbar</h1>
        <a href={pdfs.map(pdf => pdf.file)}>View pdf file {pdfs.map(pdf => pdf.author)}</a>
        <img src={pdfs.map(pdf=> pdf.image)} alt="" />
      </div>
    </div>
  )
}

export default SearchBar
