// Card.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Card = ({ type,email, price,img, location,coord, firstName, lastName, items, onClick }) => {
  const calculateAveragePrice = () => {
    if (items.length === 0) return 0;
    const total = items.reduce((acc, item) => acc + item.pricePerKg, 0);
    return (total / items.length).toFixed(2); // Calculate average and round to 2 decimal places
  };

  const handleClick = () => {
    onClick({email});
    console.log("clicked")
  };



  const averagePrice = calculateAveragePrice();

  return (
    <div onClick={handleClick} className="bg-white p-4 rounded-2xl shadow-md flex-1 min-w-[calc(33.333%-16px)] min-h-[calc(25%-10px)] mb-2 gap-2 transition duration-300 cursor-pointer hover:bg-gray-100">
      <div className="h-44 bg-gray-200 rounded-2xl mb-4">
        <img src={img} className='w-full h-full rounded-lg' alt="" />
      </div>
      <h3 className="text-lg font-semibold">{type}</h3>
      <p className="text-blue-500 mt-1">₹{averagePrice}  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Avg/Kg</span></p>
      <div className='flex mt-2'>
        <span className="material-symbols-outlined">location_on</span>
        <img src="/assets/New folder/rating.webp" width={"200px"} height={"50px"} alt="" />
        <p className="text-gray-500 ml-2 ">{location}</p>
      </div>
      <div className="mt-2">
        <p className="text-gray-700">Buyer: {firstName} {lastName}</p>
        <p className="text-gray-700">Items: {items.length > 0 ? items.map((item, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.name}</span>
        )) : "No items listed"}</p>
        
      </div>
      <div className='w-full flex justify-center items-center h-[50px] '>
     <Link to={`/overview/${email}`}> <button className='bg-[--btnColor--] p-2 w-[150px] rounded-lg text-white hover:bg-blue-900'>Sell</button></Link>
      </div>
      
    </div>
  );
};

export default Card;
