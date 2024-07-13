import React, { useState, useEffect } from 'react';
const Card = ({ type, price, location, firstName, lastName, items }) => {
 // Calculate average pricePerKg
 const calculateAveragePrice = () => {
  if (items.length === 0) return 0;
  const total = items.reduce((acc, item) => acc + item.pricePerKg, 0);
  return (total / items.length).toFixed(2); // Calculate average and round to 2 decimal places
};

const averagePrice = calculateAveragePrice();

return (
  <div className="bg-white p-4 rounded-2xl shadow-md flex-1 min-w-[calc(33.333%-16px)] min-h-[calc(25%-10px)] mb-2 gap-2">
    <div className="h-44 bg-gray-200 rounded-2xl mb-4"></div>
    <h3 className="text-lg font-semibold">{type}</h3>
    <p className="text-blue-500 mt-1">₹{averagePrice}  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Avg/Kg</span></p>
    <div className='flex mt-2'>
      <span className="material-symbols-outlined">location_on</span>
      <a href={`https://maps.google.com/?q=${location}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 ml-2 hover:underline">{location}</a>
    </div>
    <div className="mt-2">
      <p className="text-gray-700">Buyer: {firstName} {lastName}</p>
      <p className="text-gray-700">Items: {items.length > 0 ? items.map((item, index) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.name}</span>
      )) : "No items listed"}</p>
    </div>
  </div>
  );
};

const RecentMessages = () => {
  const messages = [
    { image: '/assets/Dashboard/photo.png', name: 'James Benny', message: 'Hey, Let me know if you\'re still available...' },
    { image: '/assets/Dashboard/photo.png', name: 'William Chyntia', message: 'Okay thanks' },
    { image: '/assets/Dashboard/photo.png', name: 'Henry David', message: 'Alright I\'ll get back to you ASAP' },
    { image: '/assets/Dashboard/photo.png', name: 'Charlotte Flair', message: 'Sounds good buddy' },
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
      <div className="bg-white h-[50vh]">
        <h2 className="text-lg font-semibold mb-2">Map View</h2>
        <div className="h-5/6 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

const MainContent = ({ userData }) => {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [result, setRes] = useState(0);
  const [buyerData, setBuyerData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://kudaserver.vercel.app/updatelocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
          long,
          lat,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Location saved:', data);
      setRes(data.length);

      // Assuming `data` contains buyer information, update state
      setBuyerData(data.usersWithinRadius); // Update with actual buyer data structure
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLong(position.coords.longitude);
          setLat(position.coords.latitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (long !== 0 && lat !== 0) {
      fetchData();
    }
  }, [long, lat]);

  const SearchFilter = () => (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-xl">
      <div className='flex justify-between text-xl font-[500]'>
        <p>{result} Buyers</p>
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

  return (
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
      <div className='flex h-auto'>
        <div className="flex flex-wrap gap-4 mt-4 ml-6 h-1/4 w-2/3">
          {buyerData.length > 0 ? (
            buyerData.map((buyer, index) => (
              <Card
                key={index}
                type={`${buyer.firstName} ${buyer.lastName}`}
                price="To be determined" // Adjust as per your data structure
                location={buyer.location ? `${buyer.location.coordinates[1]}, ${buyer.location.coordinates[0]}` : "Unknown location"}
                firstName={buyer.firstName}
                lastName={buyer.lastName}
                items={buyer.items}
              />
            ))
          ) : (
            <p>No buyers found.</p>
          )}
        </div>
        <div className="p-2 m-5 mt-2">
          <RecentMessages />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
