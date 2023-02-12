import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section class="bg-gray-100 dark:bg-gray-900 py-20" id='about'>
        <div class="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-6 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {/* <img class="w-full dark:hidden" src="" alt="dashboard image"/>
            <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}

            {/* <img src="/img/aipucu.png" alt="" /> */}

            <Image
             src="/img/digilib.svg"
             className='w-4/5 ml-4 dark:hidden'
             alt="Picture of the author"
             width={100}
             height={100}
              />
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About PUCU PATHFINDER</h2>
                <p class="mb-6 font-light text-slate text-gray-500 md:text-lg">
                  The first online library of PHINMA UPang College Urdaneta intended to help students navigate their steps through the perplexity of research, containing sample studies organized in categories leading to their desired topics. 
                   An assistant and guide to any academic research undertaking, truly training students to become pathfinders!
                </p>
                <a href="" class="inline-flex items-center bg-yellow-300 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Learn more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About