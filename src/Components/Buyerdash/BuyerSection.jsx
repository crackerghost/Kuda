import React from 'react';
import LeftSidebar from './Leftsidebar';

const Card = ({ image, Name, description, price     }) => (
  <div className="bg-white p-4 rounded-2xl flex shadow-md mb-2 w-full">
    <div className="flex-shrink-0">
      <img src={image} alt="image" className="w-44 h-48 object-cover" />
    </div>
    <div className="flex-grow ml-4">
      <p className="text-4xl text-blue-500 mt-3">{Name}</p>
      <p className="text-2xl text-gray-500 mt-5">{description}</p>
      <p className="text-2xl text-gray-500 mt-3">{price}</p>
    </div>
  </div>
);

const BuyerSection = () => (
  <>
<LeftSidebar/>
<div  className='w-[70%] ml-3'>
<h1 className="text-3xl m-6">Buyer Section</h1>
    <div className='shadow-md bg-slate-300 rounded-xl mb-5 p-4'>
        <label htmlFor="Name" className='text-xl'>Name:</label>
        <input
        type="text" 
        placeholder="Enter you Name here"
        className="border p-2 rounded-2xl w-auto h-12 ml-3"
        />
        <label htmlFor="Price" className='text-xl ml-4'>Price:</label>
        <input
        type="text"
        placeholder="Enter price per kg"
        className="border p-2 rounded-xl w-auto h-12 ml-3"
        />
        <button className='border bg-[--btnColor--] text-white px-5 py-3 ml-5 text-xl rounded-xl'>Submit</button>
    </div>

  <div>
    
    <div className="flex flex-col h-auto w-full">
      <Card image="/assets/Dashboard/Metal scrap.png" Name="Metal Scrap" description="description:Consists of metal waste" price="Price: 20rs/kg"/>
    </div>
  </div>
  </div>
  </>
);

export default BuyerSection;
