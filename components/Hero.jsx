import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroSearch from '../public/herosearch.svg'

const Hero = () => {
  return (
//         <section class="bg-gradient-to-r from-white-500 to-teal-500 dark:bg-gray-900 mt-4 pt-20" id='home'>
//     <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
//         <a href="#about" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
//             <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
//                     <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
//                 </svg>
//             </span> 
//             <span class="text-sm font-normal">Review of Related Literature and Studies made easy!</span> 
//         </a>
//         <h1 class="mb-4 mx-auto text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl dark:text-white max-w-screen-lg">
//             Discover related articles efficiently 
//             </h1>
//         <p class="mb-8 text-lg text-center font-light text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
//             Find the research articles of senior high school students from PHINMA UPang College Urdaneta. Find related literature and studies for your research fast!
//             </p>
//         <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
//             <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
//                 Learn more
//             </a>
//             <Link href="/articles" passHref target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//                 Search articles now
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
//                 </svg>
//             </Link>  
//         </div>
//      <div class="px-4 mx-auto text-center flex justify-center items-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
//         <Image
//             src='/files-about.svg'
//             className='w-3/4'
//             width={50}
//             height={50}
//         />
//     </div>
//     </div>
// </section>

<section class="bg-white pt-20" id='about'>
        <div class="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-6 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {/* <img class="w-full dark:hidden" src="" alt="dashboard image"/>
            <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}

            <Image
             src="banner.svg"
             className='w-full ml-4 dark:hidden'
             alt="Picture of the author"
             width={100}
             height={100}
              />
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 pt-text-4xl tracking-tight font-extrabold text-yellow-400 dark:text-yellow">
                  Navigate the world of research
                </h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Find the study that suits your own in a vast selection wait for you
                </p>
                <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Learn more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>

    
    </section>
  )
}

export default Hero