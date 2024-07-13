
import React from 'react';

const SearchFilter = () => (
  <div className="flex flex-col p-4 bg-white shadow-md rounded-xl">
    <div className='flex justify-between text-xl font-[500]'>
        <p>249 Scrap buyers</p>
        <p>Map view</p>
    </div>
    <div className='flex '>
    <input
      type="text"
      placeholder="Search Here..."
      className="border p-2 rounded-4xl w-1/4 h-12 ml-3"
    />
    <input
      type="text"
      placeholder="Price"
      className="border p-2 rounded-4xl w-auto h-12 ml-12"
    />
    <select className="border p-2 rounded-3xl h-12 mt-2 ml-8 w-40 pl-5 py-3 hover:text-white hover:border-black hover:bg-[--btnColor--] transition duration-300">
      <option value="price">Scraps</option>
      <option value="material">Material Type</option>
    </select>
    <select className="border p-2 rounded-3xl h-12 mt-2 ml-8 w-48 pl-5 hover:border hover:text-white hover:border-[--btnColor--] hover:bg-[--btnColor--] transition duration-300">
      <option value="scraps">Material type</option>
      <option value="other">Other</option>
    </select>
    <input
      type="text"
      placeholder="Filters"
      className="border p-2 rounded-4xl w-auto h-12 ml-10"
    />
    </div>
  </div>
);

const Card = ({ type, price, location }) => (
  <div className="bg-white p-4 rounded-2xl shadow-md flex-1 min-w-[calc(33.333%-16px)] min-h-[calc(25%-10px)] mb-2 gap-2" >
    <div className="h-44 bg-gray-200 rounded-2xl mb-4"></div>
    <h3 className="text-lg font-semibold">{type}</h3>
    <p className="text-blue-500 mt-1">${price}</p>
    <div className='flex mt-2'>
    <span class="material-symbols-outlined">location_on</span>
    <p className="text-gray-500">{location}</p>
    </div>
  </div>
);

const RecentMessages = () => {
  const messages = [
    { image:'/assets/Dashboard/photo.png',name: 'James Benny', message: 'Hey, Let me know if you\'re still available...' },
    { image:'/assets/Dashboard/photo.png' ,name: 'William Chyntia', message: 'Okay thanks' },
    { image:'/assets/Dashboard/photo.png' ,name: 'Henry David', message: 'Alright I\'ll get back to you ASAP' },
    { image:'/assets/Dashboard/photo.png' ,name: 'Charlotte Flair', message: 'Sounds good buddy' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-2xl h-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} className="mb-4">
            <p className="font-semibold">{msg.name}</p>
            <p className="text-gray-500">{msg.message}</p>
          </li>
        ))}
      </ul>
      <div className=" bg-white h-[50vh]">
    <h2 className="text-lg font-semibold mb-2">Map View</h2>
    <div className="h-5/6 bg-gray-200 rounded"></div>
  </div>
    </div>
    
  );
};

const MainContent = () => (

  <div className="flex-1 p-4 overflow-y-auto h-auto w-full">
  <header className='text-2xl w-full m-3 '>
        <nav>
            <ul>
                <a className='hover:font-[500] hover:text-[--btnColor--] hover:underline'>Buy</a>
                <a className='ml-8 hover:font-[500] hover:underline'>Sell</a>
            </ul>
        </nav>
    </header>
    <SearchFilter />
    <div className='flex h-auto  '>

        <div className="flex flex-wrap gap-4 mt-4 ml-6 h-1/4 w-2/3 ">
            <Card type="Metal Scrap" price="9540.99" location="Bhilai, Chhattisgarh" />
            <Card type="Electronic Scrap" price="5999.99" location="Pune, Mumbai" />
            <Card type="Rubber" price="2998.99" location="Kota, Rajasthan" />
            <Card type="Glass" price="9540.99" location="Indore, Madhyapradesh" />
            <Card type="Plastics" price="5999.99" location="Sonipat, Haryana" />
            <Card type="Papers" price="2998.99" location="Uttam Nagar, Delhi" />
        </div>
        
        <div className="p-2 m-5 mt-2 ">
            <RecentMessages />
            
        </div>
       
    </div>
  </div>
  
);

export default MainContent;
