import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-row text-3xl">
        <main className="flex flex-col items-left justify-center ml-28 mt-28">
          <h2 className="text-gray-500 font-bold text-3xl">
            Welcome to WasteWise Agency
          </h2>
          <h1 className="text-6xl 2xl:text-7xl font-bold text-gray-800 mb-4 mt-5">
            Turn Your Scrap <br /> into Cash
          </h1>
          <p className="text-2xl text-gray-600 mb-8 mt-3">
            Eco-friendly recycling solutions for all your scrap needs.
            <br />
            turning waste into value for a greener future.
          </p>
          
          {
            localStorage.getItem('token')?
<Link to={"/home"}>
 <button className="px-6 py-3 text-base text-white bg-[--btnColor--] rounded-xl w-[170px] h-[50px] mt-3 "> 
 Dashboard
</button></Link>:<Link to={"/register"}><button className="px-6 py-3 text-base text-white bg-[--btnColor--] rounded-xl w-[170px] h-[50px] mt-3 ">
 Register
</button></Link>
          }
         
        
         
        </main>
        <main>
          <img
            src="/assets/Landingpage/image 2.svg"
            className="translate-y-40"
          />
        </main>
      </div>
    </div>
  );
};

export default Hero;
