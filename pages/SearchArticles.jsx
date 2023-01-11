import React, { useState } from 'react';
import Link from 'next/link';

const PDFs = [
  {
    id: 1,
    title: 'PDF 1',
    category: 'Category A',
    url: '/pdfs/pdf1.pdf',
  },
  {
    id: 2,
    title: 'PDF 2',
    category: 'Category B',
    url: '/pdfs/pdf2.pdf',
  },
  {
    id: 3,
    title: 'PDF 3',
    category: 'Category A',
    url: '/pdfs/pdf3.pdf',
  },
  // ...
];

const PDFList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPDFs = PDFs.filter((pdf) => {
    return (
      pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || pdf.category === selectedCategory)
    );
  });

  return (
    <div>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
      </div>
      )
    }
