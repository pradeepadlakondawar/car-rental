import React, { useState } from 'react'
import FAQItem from './FAQItem';
import carImg from "../images/faq/car.png"

function FAQs() {
    const faqs =[
        {
            question: "1. What is special about comparing rental car deals?",
            answer:"Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
        },
        {
            question: "2. How do I find the car rental deals?",
            answer:"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
        },
        {
            question: "3. How do I find such low rental car prices?",
            answer:"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
        }
    ]

     
    return (
        <div className='w-screen my-4 bg-left-bottom bg-no-repeat h-[75vh] flex items-center' 
        style={{ backgroundImage: `url(${carImg})` }}>
            <div className=" mx-auto p-4 max-w-screen-lg ">
      <h4 className="text-2xl font-bold text-gray-800 mb-2 text-center">FAQ</h4>
      <h3 className="text-5xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h3>
      <p className=" text-gray-600 mb-8 text-center px-28">
        Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
      </p>
      <div className="w-3/4 mx-auto rounded-lg shadow-md mb-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            
          />
        ))}
      </div>
    </div>
        </div>
    )
}

export default FAQs;
