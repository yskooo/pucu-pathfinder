import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleNav = () => {
  return (
  <div className="bg-green container flex items-center justify-center mt-4 mx-auto">
  <a href="" className="flex justify-center items-center">
    <Image 
        src='/pucu.png'
        className='py-6'
        width={75}
        height={75}
        alt='PUCU Logo'
    />
  </a>
  

  </div>
    )
}

export default ArticleNav

