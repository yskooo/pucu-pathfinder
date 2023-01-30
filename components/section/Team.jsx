import React from 'react'

const Team = () => {
  return (
    <section >
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Team</h2>
                 <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Made by busy students for busy students. A group of Grade 12 STEM students. Research in  STEM</p>
            </div> 
        <div className='place-content-center justify-center align-center'>
        <div class="flex flex-col">
          <div>Founder & Developer</div>
          <div>Project Manager & UI/UX Designer</div>
        </div>
        <section className=''>
            <div class="place-content-center justify-around flex flex-row ">
                <div>Research Specialists</div>
                <div>Research Specialists</div>
                <div>Research Specialists</div>
                <div>Research Specialists</div>
            </div>
            <div class="place-content-center justify-around flex flex-row">
                <div>UI/UX Designer</div>
                <div>UI/UX Designer</div>
                <div>UI/UX Designer</div>
                <div>UI/UX Designer</div>
            </div>
            <div class="place-content-center justify-around flex flex-row">
                <div>Content Writers</div>
                <div>Content Writers</div>
                <div>Content Writers</div>
                <div>Content Writers</div>
            </div>
            <div class="place-content-center justify-around flex flex-row">
                <div>Analysts</div>
                <div>Analysts</div>
                <div>Analysts</div>
                <div>Analysts</div>
            </div>
        </section>


      </div>  
      </div>  
    </section>
  )
}

export default Team
