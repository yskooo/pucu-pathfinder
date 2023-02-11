import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id='contact'>
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Do you have a feature request or you want to feature your research study in this platform?</p>
            <a href="#" className="text-white bg-yellow-300 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
              Send Us an Email
            </a>
        </div>
    </div>
</section>
  )
}

export default Contact;