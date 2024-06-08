import React from 'react'
import icon1 from "../images/plan/icon1.png"
import icon2 from "../images/plan/icon2.png"
import icon3 from "../images/plan/icon3.png"

function RentalSteps() {
  return (
    <div className='bg-gray-100 py-8 w-screen px-6 my-20'>
    <div className='text-center'>
      <div className='text-3xl text-gray-600'>Plan your trip now</div>
      <div className='text-3xl md:text-6xl font-bold text-gray-900'>Quick & easy car rental</div>
    </div>
    <div className='flex flex-col md:flex-row justify-around items-center'>
      <div className='flex flex-col items-center  md:mb-0 md:w-1/3 p-4'>
        <img src={icon1} alt="Select Car" className='w-60 h-60 ' />
        <div className='text-2xl font-bold mb-2 '>Select Car</div>
        <p className='text-center text-gray-600 w-2/3'>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
      </div>
      <div className='flex flex-col items-center  md:mb-0 md:w-1/3 p-4'>
        <img src={icon2} alt="Contact Operator" className='w-60 h-60 ' />
        <div className='text-2xl font-bold mb-2'>Contact Operator</div>
        <p className='text-center text-gray-600 w-2/3'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
      </div>
      <div className='flex flex-col items-center md:w-1/3 p-4'>
        <img src={icon3} alt="Let's drive" className='w-60 h-60 ' />
        <div className='text-2xl font-bold mb-2'>Let&apos;s drive</div>
        <p className='text-center text-gray-600 w-2/3'>Whether you&apos;re hitting the open road, we&apos;ve got you covered with our wide range of cars.</p>
      </div>
    </div>
  </div>
);
}

export default RentalSteps
