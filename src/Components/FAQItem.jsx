import React, { useState } from 'react';

const FAQItem = ({question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)  ;
    const toggleAccordion = ()=>{
        setIsOpen(!isOpen)
       
    } 
  return (
    <div className={`rounded-lg shadow-md mb-4 ${isOpen ? 'bg-[#ff4d30]' : ''}`}>
    <div
      className="flex justify-between items-center px-4 py-3 cursor-pointer"
      onClick={toggleAccordion}
    >
      <h3 className="font-bold text-black">{question}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-6 h-6 text-black transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      >
        <path d="M6 9l6 6l6-6"></path>
      </svg>
    </div>
    {isOpen && (
      <div className="px-4 py-3 bg-white">
        <p className="text-gray-800">{answer}</p>
      </div>
    )}
  </div>
  )
}

export default FAQItem;
