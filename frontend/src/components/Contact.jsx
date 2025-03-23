import React from 'react'
import ContactForm from './ContactForm'
import ContactR from './ContactR'
import backgroundImage from '../assets/Images/Footer.jpg';

function Contact() {
  return (
    <div className=''>
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
            Contact Us
          </h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/contact"
              className="text-white font-bold underline hover:text-gray-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      <ContactR/>
    </div>
  )
}

export default Contact
