import React, {useState} from 'react'
import car_rental__logo from "../images/logo/Car_rental__logo.png"
import Button from './Button'

import { NavLink } from "react-router-dom";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };
    const navlinks=[
        {name:"Home",
        elemnts: "/"
    },
        {
            name:"About",
            elemnts:'/about'
        },
        {
            name:"Vehicle Models",
            elemnts:'/vehicle Models'
        },
        {
            name:"Testimonials",
            elemnts:'/testimonials'
        },
        {
            name:"Our Team",
            elemnts:'/our team'
        },
        {
            name:"Contact",
            elemnts:'/contact'
        },

    ]
  return (
    <>
      <div className="navbar w-screen  flex justify-between fixed z-50 bg-white">
        <div className="navbar__logo w-1/3 h-1/3 p-4 sm:w-1/4 sm:h-1/4 lg:w-1/5  ">
            <img src={car_rental__logo} alt="logo" />
        </div>

          {/* For mobile  */}
          {/* Hamburger icon for small screens */}
        <button 
         className="block lg:hidden text-black focus:outline-none mr-4 "
         onClick={toggleNavbar}
        >
            {isOpen?  (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>) : (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>) }
        </button>


          <div className={`flex flex-col text-end p-1 font-semibold ${isOpen? "block" : "hidden"} absolute right-10 top-2`}>
        <div className="navbar__links ">
            <ul className=' mx-2 '>
           <li className=' text-md font-semibold flex flex-col'>
           {navlinks.map((item)=> (
                    <NavLink className={` text-end p-1 font-bold hover:text-[#ff4d30] ${(isActive)=> isActive? "text-[#ff4d30]": "" }`} key={item.name} to={item.elemnts}>
                        {item.name} 

                    </NavLink>
                ))}
           </li>
            </ul>
        </div>
        <div className="navbar__buttons flex flex-col p-2">
            <NavLink to={"/"} className={`text-xl mr-3 hover:text-[#ff4d30]`}>
                Signin 
            </NavLink>
            <Button
            name={"Register"} 
            className={`sm:px-7 sm:py-3`}/>
        </div>
        </div>



        {/*For other devices  */}
        <div className={`flex max-lg:hidden`} >
        <div className="navbar__links ">
            <ul className=' mx-10 py-14'>
           <li className=' text-xl font-semibold'>
           {navlinks.map((item)=> (
                    <NavLink className={`mr-8 text-center items-center hover:text-[#ff4d30]`} key={item.name} to={item.elemnts}>
                        {item.name} 

                    </NavLink>
                ))}
           </li>
            </ul>
        </div>
        <div className="navbar__buttons p-10">
            <NavLink to={"/"} className={`text-xl mr-3 hover:text-[#ff4d30]`}>
                Signin
            </NavLink>
            <Button
            name={"Register"} 
            className={`sm:px-7 sm:py-3`}/>
        </div>
        </div>

      


      </div>
    </>
  )
}

export default Navbar
