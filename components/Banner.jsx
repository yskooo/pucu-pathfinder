import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Banner = () => {
  return (
//     <section class="bg-[url('/img/upangbg.svg')] w-full min- bg-cover bg-center m-auto py-20" id='home'>
//     <div class="py-20 px-4 mx-auto max-w-screen-2xl text-start lg:py-16 lg:px-12">
//         <h1 class="mb-4 mx-auto text-5xl font-extrabold tracking-tight leading-none text-yellow-300 md:text-5xl lg:text-7xl max-w-screen-lg">
//             Navigate the world of search 
//         </h1>
//         <p class="mb-8 text-lg text-start font-light text-white lg:text-xl sm:px-16 xl:px-48">
//           Find the study that suits your own in a vast selection waiting for you!
//         </p>
//         <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
//             {/* <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-300 hover:bg-primary-500 focus:ring-4 focus:ring-primary-500">
//                 Learn more
//             </a> */}
//             <Link href="/articles" passHref target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100">
//                 Search articles now
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
//                 </svg>
//             </Link>  
//         </div>
//     </div>
// </section>


<div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
  
  <div class="flex items-center justify-center">
    <main class="max-w-screen-xl px-4 pt-16 lg:px-16">
        <div class="text-start">
        <h1 class="mb-4 mx-auto text-5xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-7xl max-w-screen-lg">
             Navigate the world of Search
        </h1>     
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Find the study that suits your own in a vast selection waiting for you!
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-start">
             <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
             <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-900 hover:bg-yellow-300 focus:ring-4 focus:ring-primary-500">
                 Learn more
             </a>
             <Link href="/articles" passHref target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-700 rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100">
                 Search articles now
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                 </svg>
             </Link>  
         </div>
          </div>
        </div>
      </main>
  </div>
  <div class="bg-[url('/img/circle.svg')] relative w-full object-cover h-100 lg:w-full md:h-screen bg-cover bg-center">
  </div>
</div>


  )
}

export default Banner;