import React from 'react'
import Herobg1 from "../images/hero/heroes-bg.png"
import Herobg2 from "../images/hero/hero-bg.png"
import Herobg3 from "../images/hero/main-car.png"
import Navbar from '../Components/Navbar'
import {BrowserRouter as Router,  } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container w-screen h-screen">
        
        
        <img src={Herobg2} className="absolute h-screen right-0" alt="" />
        <img src={Herobg3} className="absolute h-1/2 right-28 top-20 sm:h-2/6 " alt="" />
        
        <div className='lg:w-7/12 lg:pt-52  
        lg:pl-52 items-center md:w-1/2 md:pt-24   md:pl-20'>
        <h2 className=' text-3xl font-semibold mb-4'>Plan your trip now</h2>
        <h1 className=' text-6xl font-bold mb-10'>Save <span className='text-[#ff4d30]'>big</span> with our car rental</h1>
        <p className=' text-xl'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        </div>
        
        


      </div>
    </>
  )
}

export default Home
