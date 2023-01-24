import React from 'react'

const Header = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap text-dark">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
      Pathfinder
      </span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
        </svg>
        </button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#home" clasName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#team" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Meet Our Team</a>
      </li>
      <li>
        <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Header

// export default Header

// import React from 'react'
// import { Navbar, Brand, Dropdown, Avatar } from 'flowbite-react'

// const Header = () => {
//   return (
//     <div>
//       <Navbar
//   fluid={false}
//   rounded={true}
// >
//   <Navbar.Brand href="https://flowbite.com/">
//     <img
//       src="https://flowbite.com/docs/images/logo.svg"
//       className="mr-3 h-6 sm:h-9"
//       alt="Flowbite Logo"
//     />
//     <span data-tip="blablabalba" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//       Flowbite
//     </span>
//   </Navbar.Brand>
//   <div className="flex md:order-2">
//     <Dropdown
//       arrowIcon={false}
//       inline={true}
//       label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
//     >
//       <Dropdown.Header>
//         <span className="block text-sm">
//           Bonnie Green
//         </span>
//         <span className="block truncate text-sm font-medium">
//           name@flowbite.com
//         </span>
//       </Dropdown.Header>
//       <Dropdown.Item>
//         Dashboard
//       </Dropdown.Item>
//       <Dropdown.Item>
//         Settings
//       </Dropdown.Item>
//       <Dropdown.Item>
//         Earnings
//       </Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item>
//         Sign out
//       </Dropdown.Item>
//     </Dropdown>
//     <Navbar.Toggle />
//   </div>
//   <Navbar.Collapse>
//     <Navbar.Link
//       href="/navbars"
//       active={true}
//     >
//       Home
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       About
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       Services
//     </Navbar.Link>
//     <Navbar.Link href="/navbars">
//       Pricing
//     </Navbar.Link>
//     <Navbar.Link href="">
//       Contact
//     </Navbar.Link>
//   </Navbar.Collapse>
// </Navbar>
//     </div>
//   )
// }

// export default Header