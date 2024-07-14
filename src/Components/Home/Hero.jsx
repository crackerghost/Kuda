// import React from "react";
// import { Link } from "react-router-dom";


// const Hero = () => {
//   return (
//     <div className="h-[100vh]">
//       <div className="flex flex-row text-3xl">
//         <main className="flex flex-col items-left justify-center ml-28 mt-28">
//           <h2 className="text-gray-500 font-bold text-3xl">
//             Welcome to WasteWise Agency
//           </h2>
//           <h1 className="text-6xl 2xl:text-7xl font-bold text-gray-800 mb-4 mt-5">
//             Turn Your Scrap <br /> into Cash
//           </h1>
//           <p className="text-2xl text-gray-600 mb-8 mt-3">
//             Eco-friendly recycling solutions for all your scrap needs.
//             <br />
//             turning waste into value for a greener future.
//           </p>
          
//           {
//             localStorage.getItem('token')?
// <Link to={"/home"}>
//  <button className="px-6 py-3 text-base text-white bg-[--btnColor--] rounded-xl w-[170px] h-[50px] mt-3 "> 
//  Dashboard
// </button></Link>:<Link to={"/register"}><button className="px-6 py-3 text-base text-white bg-[--btnColor--] rounded-xl w-[170px] h-[50px] mt-3 ">
//  Register
// </button></Link>
//           }
         
        
         
//         </main>
//         <main>
//           <img
//             src="/assets/Landingpage/image 2.svg"
//             className="translate-y-40"
//           />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto h-screen flex flex-col-reverse sm:flex-row items-center mt-[250px] md:mt-0 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col justify-center items-start p-4 sm:p-8 sm:pl-12 lg:pl-28 sm:mt-8 flex-1">
        <h2 className="text-gray-500 font-bold text-3xl" data-aos="fade-up">
          Welcome to WasteWise Agency
        </h2>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Turn Your Scrap <br /> into Cash
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-600 mb-8 mt-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Eco-friendly recycling solutions for all your scrap needs.
          <br />
          Turning waste into value for a greener future.
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
         
      </div>
      <div className="flex-1 flex justify-center items-center p-4 sm:p-8">
        <img
          src="https://img.freepik.com/free-vector/people-recycling-with-bins_23-2148524156.jpg?ga=GA1.1.1348472059.1716706247&semt=ais_user"
          className="max-w-full h-auto md:max-w-sm lg:max-w-md mix-blend-multiply"
          alt="Recycling"
        />
      </div>
    </div>
  );
};

export default Hero;
