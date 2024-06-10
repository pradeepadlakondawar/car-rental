import React from 'react';
import bgImg from "../images/banners/bg02.png";
import appstoreimg from "../images/download/appstore.svg";
import googleappimg from "../images/download/googleapp.svg";

function Download() {
  return (
    <div 
    className='bg-cover bg-center bg-no-repeat w-screen h-[75vh] flex items-center' 
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <div className='bg-white bg-opacity-75 p-8 rounded-lg w-1/2 ml-8'>
      <h2 className='text-5xl font-bold mb-4'>Download our app to get most out of it</h2>
      <p className='text-md mb-8'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
      <div className='flex gap-4'>
        <img src={appstoreimg} alt="appstoreimg" className='w-32 h-auto' />
        <img src={googleappimg} alt="googleappimg" className='w-32 h-auto' />
      </div>
    </div>
  </div>
  )
}

export default Download
