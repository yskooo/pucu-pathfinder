import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
<div class="bg-[url('/img/bgbanner.svg')] opacity-95 relative h-screen w-full pt-20 flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left bg-cover bg-center" id='home'> 
  <main class="px-8 sm:px-24 z-10 sm:w-2/3">
        <div class="">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-[#D3B306] sm:leading-none md:text-6xl">
            Navigate the world of research
          </h2>
          <p class="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-xl font-medium">
            Find the study that suits your own in a vast selection waiting for you!
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-start">
             <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
             <a href="#about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white tracking-wide rounded-lg shadow-md shadow-blue-500/30 bg-blue-800 hover:bg- focus:ring-4 focus:ring-yellow-300">
                 Learn more
             </a>
             <Link href="/articles" passHref target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-small text-center text-white rounded-lg border  border-gray-300 focus:ring-2 focus:ring-blue-700">
                 Search articles now
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                 </svg>
             </Link>  
         </div>
         </div>
        </div>
      </main>
  
    <div class="flex sm:flex-col z-10">
           <img src="/img/emblem.svg" className='relative' alt="" />
    </div>
  
</div>
  )
}

export default Hero