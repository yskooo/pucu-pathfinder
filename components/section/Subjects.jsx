import React from 'react'
import Image from 'next/image'

const Subjects = () => {
  return (
    <div>
    <section class="bg-gray-100 dark:bg-green-700" id='subjects'>
     <div class="px-6 py-10 mx-auto pt-20">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Subjects</h2>
                 <p class="text-base text-gray-500 sm:text-xl dark:text-gray-400">
                     Discover the available research studies by the senior high school students of PHINMA UPang College Urdaneta from S.Y. 2019 - S.Y. 2023
                </p>
            </div> 

        {/* <div class="grid grid-cols-3 text-center gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3"> */}
            <section className='flex flex-row justify-center items-center text-center'>
            <div class="w-2/6">
                <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={10}
                    height={10}
                    alt='logo'
                    />
                <h1 className='font-bold'>ABM 001</h1>
                <p>ORGANIZATION AND MANAGEMENT</p>
            </div>
            <div className="w-2/6">
            <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>ABM 006</h1>
                <p>PRINCIPLES OF MARKETING</p>
            </div>
            <div className="w-2/6">
            <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>APP 003</h1>
                <p>FILIPINO SA PILING LARANGAN</p>
            </div> 
            

            <div className="2/6">
             <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>STM 009</h1>
                <p>RESEARCH IN SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS</p>
            </div>
            </section>

            <section className='grid grid-cols-4 text-center gap-10'>
            <div className="w-full">
            <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>APP 004</h1>
                <p>ENTREPRENEURSHIP</p>
            </div> 
            <div className="w-full">
            <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>APP 005</h1>
                <p>PRACTICAL RESEARCH 1</p>
            </div> 
            <div className="w-full">
            <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>APP 006</h1>
                <p>PRACTICAL RESEARCH 2</p>
            </div>
             <div className="w-full">
             <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>APP 007</h1>
                <p>INQUIRIES, INVESTIGATION, AND IMMERSION</p>
            </div>
            </section>

            <section className='grid grid-cols-2 text-center gap-10'>
             {/* <div className="2/6">
             <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>STM 009</h1>
                <p>RESEARCH IN SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS</p>
            </div> */}
            <div className="1/6">
            <Image
                    src='img/subjectbook.svg'
                    className='w-full'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1 className='font-bold'>COR 003 & COR 004</h1>
                <p>KOMUNIKASYON AT PANANALIKSIK SA WIKA
                    AT KULTURANG FILIPINO & PAGBASA AT PAGSURI
                    NG IBA’T IBANG TEKSTO TUNGO SA PANANALIKSIK
                </p>
            </div>
            </section>
        </div>
        
    {/* </div> */}
</section>
    </div>
  )
}

export default Subjects
