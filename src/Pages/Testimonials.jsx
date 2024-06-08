import React from 'react'
import testimonialImg1 from "../images/testimonials/pfp1.jpg"
import testimonialImg2 from "../images/testimonials/pfp2.jpg"

function Testimonials() {
  return (
    <div className='bg-gray-100 my-4 w-screen py-8'>
      <div className='text-center mb-8 mt-4'>
        <h4 className='text-2xl font-semibold text-gray-600'>Reviewed by People</h4>
        <h3 className='text-4xl md:text-5xl font-bold text-gray-900'>Client&apos;s Testimonials</h3>
        <p className='text-gray-600 px-96 mt-4 text-lg'>Discover the positive impact we&apos;ve made on our clients by reading through their testimonials. Our clients have experienced our service and results, and they&apos;re eager to share their positive experiences with you.</p>
      </div>

      <div className='flex flex-col md:flex-row justify-around '>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 md:w-1/3'>
          <p className='mb-4 text-gray-700 font-semibold text-2xl p-10'>&quot;We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.&quot;</p>
          <div className='flex items-center px-10'>
            <img src={testimonialImg1} alt="testimonial profile img" className='w-12 h-12 rounded-full mr-4' />
            <div className='flex flex-col'>
              <h4 className='font-bold text-gray-900 text-xl'>Petter Porter</h4>
              <p className='text-gray-600 text-lg'>Mars</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto text-[#ff4d30]'><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
          </div>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 md:w-1/3'>
          <p className='mb-4 text-gray-700 font-semibold text-2xl p-10'>&quot;The car was in great condition and made our trip even better. Highly recommend for this car rental website!&quot;</p>
          <div className='flex items-center px-10 py-8'>
            <img src={testimonialImg2} alt="testimonial profile img" className='w-12 h-12 rounded-full mr-4' />
            <div className='flex flex-col'>
              <h4 className='font-bold text-gray-900 text-xl'>Ronn Grizley</h4>
              <p className='text-gray-600 text-lg'>Jupiter</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='ml-auto text-[#ff4d30]'><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
