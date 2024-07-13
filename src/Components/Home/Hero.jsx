import React from 'react';

const Hero = () => {
  return (
  
    <div className='h-[100vh]' >
      <header className="w-full py-4">
        <div className="container mx-auto flex justify-around items-center px-6">
          <div className="text-2xl font-semibold text-gray-800"><img src="/assets/Landingpage/Logo.svg"/></div>
          <nav className="space-x-6 w-[50%] flex justify-center">
            <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">Service</a>
            <a href="#listed" className="text-gray-600 hover:text-gray-800">Listed</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <div className="space-x-4">
            <button className="px-4 py-2 text-white bg-[--btnColor--] rounded-xl w-[100px] h-[40px]">Sign up</button>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-xl w-[100px] h-[40px]">Register</button>
          </div>
        </div>
      </header>
      <div className='flex flex-row text-3xl'>
        <main className="flex flex-col items-left justify-center ml-28 mt-28">
          <h2 className='text-gray-500 font-bold text-3xl'>Welcome to WasteWise Agency</h2>
          <h1 className="text-7xl font-bold text-gray-800 mb-4 mt-5">Turn Your Scrap <br/> into Cash</h1>
          <p className="text-2xl text-gray-600 mb-8 mt-3">
            eco-friendly recycling solutions for all your scrap needs.<br/>
            turning waste into value for a greener future.
          </p>
          <button className="px-6 py-3 text-base text-white bg-[--btnColor--] rounded-xl w-[170px] h-[50px] mt-3 ">More About Us</button>
        </main>
        <main>
          <img src="/assets/Landingpage/image 2.svg" className='translate-y-40'/>
        </main>
      </div>
      </div>
   
  );
};

export default Hero;