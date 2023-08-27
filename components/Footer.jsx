import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-4xl">
        <div class="md:flex md:justify-between">
            <div class="mb-30 md:mb-0">
                <a href="" className="flex items-center">
                    <Image
                    src="/img/pucupathlogo.svg"
                    className='w-3/4'
                    alt="pucu"
                    width={100}
                    height={100}
                    />
                </a>
                <div className='mx-10 sm:my-4'>
                  <p className='my-1 text-gray-500 dark:text-gray-400'>Helping research rangers forge <br/>a path in the world of research.</p>
                </div>
            </div>
            <br /> <br />
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pathfinder</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="" class="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="" class="hover:underline">Team</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="" class="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="" class="hover:underline">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">PUCU Pathfinder</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;
