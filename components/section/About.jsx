import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section class="bg-white dark:bg-gray-900 py-20" id='about'>
        <div class="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-6 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {/* <img class="w-full dark:hidden" src="" alt="dashboard image"/>
            <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}

            <Image
             src="/swag.svg"
             className='w-2/3 ml-4 dark:hidden'
             alt="Picture of the author"
             width={40}
             height={40}
              />
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About PUCU Pathfinder</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
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

export default About