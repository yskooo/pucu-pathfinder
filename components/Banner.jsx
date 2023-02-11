import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Banner = () => {
  return (
    <section class="bg-[url('/img/upangbg.svg')] w-full min-h-screen bg-cover bg-center m-auto pt-20" id='home'>
    <div class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
    {/* <Image
            src='/img/pucu-white.svg'
            className='w-1/2'
            width={50}
            height={50}
        /> */}
        <h1 class="mb-4 mx-auto text-5xl font-extrabold tracking-tight leading-none text-yellow-300 md:text-5xl lg:text-7xl max-w-screen-lg">
            Navigate the world of search
        </h1>
        <p class="mb-8 text-lg text-center font-light text-white lg:text-xl sm:px-16 xl:px-48">
          Find the study that suits your own in a vast selection waiting for you!
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {/* <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-300 hover:bg-primary-500 focus:ring-4 focus:ring-primary-500">
                Learn more
            </a> */}
            <Link href="/articles" passHref target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 focus:ring-4 focus:ring-gray-100">
                Search articles now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
            </Link>  
        </div>
     {/* <div class="px-4 mx-auto text-center flex justify-center items-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <Image
            src='/files-about.svg'
            className='w-3/4'
            width={50}
            height={50}
        />
    </div> */}
    </div>
</section>
  )
}

export default Banner;