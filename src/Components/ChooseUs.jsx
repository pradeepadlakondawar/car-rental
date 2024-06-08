import React from 'react'
import mainimg from "../images/chooseUs/main.png";
import icon1 from "../images/chooseUs/icon1.png";
import icon2 from "../images/chooseUs/icon2.png";
import icon3 from "../images/chooseUs/icon3.png";
import Button from './Button';

function ChooseUs() {
  return (
    <div className='bg-gray-100 py-8 w-screen px-4'>
    <div className='flex justify-center mb-8'>
      <img src={mainimg} alt="Hero Img of section" className='w-full md:w-2/3 lg:w-1/2' />
    </div>
    <div className='flex flex-col md:flex-row justify-around items-start px-20'>
      <div className='md:w-1/2 p-4 px-10'>
        <h4 className='text-2xl font-bold text-gray-900 mb-2'>Why Choose Us</h4>
        <h3 className=' md:text-5xl font-bold text-gray-900 mb-4'>Best valued deals you will ever find</h3>
        <p className='text-gray-600 mb-8'>Discover the best deals you&apos;ll ever find with our unbeatable offers. We&apos;re dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don&apos;t miss out on your chance to save big.</p>
        <Button
            name={"Find Details"} 
            className={`sm:px-7 sm:py-3 font-bold text-white`}
            />
      </div>
      <div className='md:w-1/2 p-4'>
        <div className='flex items-start mb-4'>
          <img src={icon1} alt="icon img" className='w-36 h-36 rounded-full mr-4' />
          <div className='mt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>Cross Country Drive</h3>
            <p className='text-gray-600'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
          </div>
        </div>
        <div className='flex items-start mb-4'>
          <img src={icon2} alt="icon img" className='w-36 h-36 rounded-full mr-4' />
          <div className='mt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>All Inclusive Pricing</h3>
            <p className='text-gray-600'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
          </div>
        </div>
        <div className='flex items-start'>
          <img src={icon3} alt="icon img" className='w-36 h-36 rounded-full mr-4' />
          <div className='mt-6'>
            <h3 className='text-2xl font-bold text-gray-900'>No Hidden Charges</h3>
            <p className='text-gray-600'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ChooseUs
