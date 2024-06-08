import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center w-screen py-8'>
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      <div>
        <h3 className='text-2xl font-extrabold mb-4'>CAR Rental</h3>
        <p className='mb-4'>
          We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
        </p>
        <div className='mb-2'>(123) -456-789</div>
        <div>carrental@gmail.com</div>
      </div>
      <div>
        <h3 className='text-2xl font-extrabold mb-4'>COMPANY</h3>
        <ul>
          <li className='mb-2'>New York</li>
          <li className='mb-2'>Careers</li>
          <li className='mb-2'>Mobile</li>
          <li className='mb-2'>Blog</li>
          <li className='mb-2'>How we work</li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-extrabold mb-4'>WORKING HOURS</h3>
        <ul>
          <li className='mb-2'>Mon - Fri: 9:00AM - 9:00PM</li>
          <li className='mb-2'>Sat: 9:00AM - 19:00PM</li>
          <li className='mb-2'>Sun: Closed</li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-extrabold mb-4'>SUBSCRIPTION</h3>
        <p className='mb-4'>Subscribe your Email address for latest news & updates.</p>
        <input 
          type='email' 
          placeholder='Enter your email' 
          className='w-full p-2 mb-4 text-gray-900 rounded'
        />
        <button className='w-full bg-[#ff4d30] p-2 rounded text-white hover:bg-blue-600'>
          Subscribe
        </button>
      </div>
    </div>
  </div>
);
}


export default Footer
