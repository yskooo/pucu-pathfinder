import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section className="bg-[#FFFFF0]">
        <div class="py-8 px-4 mx-auto max-w-screen-4xl text-center lg:py-16 lg:px-6" id='team'>
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Team</h2>
                 <p class="font-light text-base text-gray-500 sm:text-xl dark:text-gray-400">
                  Developed by enthusiastic and persevering research group from 
                    12 STEM-ACAD 1 A.Y. 2022-2023
                </p>
            </div> 
        <div className='place-content-center justify-center align-center'>
        <section class="flex flex-col">
          <div className='my-5'>
            <div className="flex justify-center items-center">
              <img src="/people/jm.png" className='rounded-full w-24' alt="" />
            </div>
              <h1>Valendiano, Jay Marc</h1>
            <p>Project Manager & UI/UX Designer</p>
          </div>

          <div className='my-5'>
          <img class="mx-auto mb-4 w-20 h-20 rounded-full" src="/people/harold.png" alt=""/>
            <h1>Patacsil, Harold</h1>
            <p>Software Developer</p>
          </div>
        </section>
        <section className=''>
        <div class="place-content-center justify-around flex flex-row">
            <div className='my-5'>
            <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/geneva.JPG" alt=""/>
                <h1>Rasca, Princess Geneva</h1>
                <p>UI/UX Designer</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/janine.jpg" alt=""/>
                <h1>Salvador, Janine Samantha</h1>
                <p>UI/UX Designer</p>
              </div><div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/aj.jpg" alt=""/>
                <h1>Santilla, AJ</h1>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div class="place-content-center justify-around flex flex-row ">
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-lg" src="/people/aleah.jpeg" alt=""/>
                <h1>Umang, Aleah Jana</h1>
                <p>Research Specialist</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/adrian.jpeg" alt=""/>
                <h1>Tiang, Aadrian</h1>
                <p>Research Specialist</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/jhen.jpg" alt=""/>
                <h1>Soriano, Jhen Karylle</h1>
                <p>Research Specialist</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/mica.jpg" alt=""/>
                <h1>Simon, Mikaela</h1>
                <p>Research Specialist</p>
              </div>
            </div>
            <div class="place-content-center justify-around flex flex-row">
            <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/cz.jpg" alt=""/>
                <h1>Soriano, Cziane Aiva</h1>
                <p>Content Writer</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/jessica.png" alt=""/>
                <h1>Quiming, Jessica</h1>
                <p>Content Writer</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-full" src="/people/yu.jpg" alt=""/>
                <h1>Yu, Julianne</h1>
                <p>Content Writer</p>
              </div>
            </div>
            <div class="place-content-center justify-around flex flex-row">
            <div className='my-5'>
            <img class="mx-auto mb-4 w-24 h-24 rounded-lg" src="/people/zac.jpg" alt=""/>
                <h1>Valdez, Zac</h1>
                <p>Analyst</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-lg" src="/people/paul.jpeg" alt=""/>
                <h1>Sarmiento, Mark Paul</h1>
                <p>Analyst</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-lg" src="/people/jorence.png" alt=""/>
                <h1>Oliveras, Jorence</h1>
                <p>Analyst</p>
              </div>
              <div className='my-10'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-lg" src="/people/kate.jpg" alt=""/>
                <h1>Tabilin, Kate Abegail</h1>
                <p>Analyst</p>
              </div>
              <div className='my-5'>
              <img class="mx-auto mb-4 w-24 h-24 rounded-lg" src="/people/felix.jpg" alt=""/>
                <h1>Sembran, Marc Felix</h1>
                <p>Analyst</p>
              </div>
              
            </div>
        </section>
      </div>  
      </div>  
    </section>
  )
}

export default Team
