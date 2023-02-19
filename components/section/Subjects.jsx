import React from 'react'
import Image from 'next/image'

const Subjects = () => {
  return (
    <div>
<section class="bg-white dark:bg-green-700">
    <div class="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold flex items-center justify-center">Subjects</h1>

        <p class="dark:bg-green-700 text-center">Discover the subjects available here so you`&apos`re not mahihirapan on your research</p>

        <div class="grid grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div class="w-full ">
                {/* <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div> */}
                <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>ABM 001</h1>
                <p>ORGANIZATION AND MANAGEMENT</p>
                {/* <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">ABM</h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">BLABLABLA</p> */}
            </div>
            <div className="w-full">
            <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>ABM 006</h1>
                <p>PRINCIPLES OF MARKETING</p>
            </div>
            <div className="w-full">
            <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>APP 003</h1>
                <p>FILIPINO SA PILING LARANGAN</p>
            </div> 
            <div className="w-full">
                <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>APP 004</h1>
                <p>ENTREPRENEURSHIP</p>
            </div> 
            <div className="w-full">
                <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>APP 005</h1>
                <p>PRACTICAL RESEARCH 1</p>
            </div> 
            <div className="w-full">
            <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>APP 006</h1>
                <p>PRACTICAL RESEARCH 2</p>
            </div>
             <div className="w-full">
             <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>APP 007</h1>
                <p>INQUIRIES, INVESTIGATION, AND IMMERSION</p>
            </div>
             <div className="w-full">
                <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>STM 009</h1>
                <p>RESEARCH IN SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS</p>
            </div>
            <div className="w-full">
                <Image
                    src='img/subject-book.svg'
                    className='w-2/3'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                <h1>COR 003 & COR 004</h1>
                <p>KOMUNIKASYON AT PANANALIKSIK SA WIKA
AT KULTURANG FILIPINO & PAGBASA AT PAGSURI
NG IBA’T IBANG TEKSTO TUNGO SA PANANALIKSIK</p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Subjects
