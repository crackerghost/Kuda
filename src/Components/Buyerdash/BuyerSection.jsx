import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeftSidebar from './Leftsidebar';
// Adjust the path as needed

const Card = ({ image, Name, description, price }) => (
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

const BuyerSection = () => {
  const [itemName, setItemName] = useState('');
  const [pricePerKg, setPricePerKg] = useState('');
  const [itemsList, setItemsList] = useState([]);
  const [userData, setUserData] = useState(null); // State to hold user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem('email');
        const response = await axios.get(`https://kudaserver.vercel.app/userData?email=${email}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.status === 200) {
          setUserData(response.data.user);
          setItemsList(response.data.user.items); // Initialize itemsList after userData is fetched
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = localStorage.getItem('email');
      const newItem = { name: itemName, pricePerKg: parseFloat(pricePerKg) };
      const updatedItems = [...itemsList, newItem];
      setItemsList(updatedItems);

      const response = await axios.post(
        'https://kudaserver.vercel.app/addItems',
        {
          email,
          items: updatedItems,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Add item response:', response.data);

      // Clear form inputs after successful submission
      setItemName('');
      setPricePerKg('');
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle error as needed
    }
  };

  if (!userData) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div className="flex">
      <LeftSidebar userData={userData} /> {/* Pass userData to LeftSidebar */}
      <div className="w-[70%] ml-3">
        <h1 className="text-3xl m-6">Buyer Section</h1>
        <div className="shadow-md bg-slate-300 rounded-xl mb-5 p-4">
          <form onSubmit={handleSubmit} className="flex items-center">
            <label htmlFor="itemName" className="text-xl">
              Name:
            </label>
            <input
              type="text"
              id="itemName"
              placeholder="Iron, Plastic, Gold"
              className="border p-2 rounded-2xl w-auto h-12 ml-3"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
            <label htmlFor="pricePerKg" className="text-xl ml-4">
              Price:
            </label>
            <input
              type="number"
              id="pricePerKg"
              placeholder="Enter price per kg"
              className="border p-2 rounded-xl w-auto h-12 ml-3"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
              required
            />
            <button
              type="submit"
              className="border bg-[--btnColor--] text-white px-5 py-3 ml-5 text-xl rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-col h-auto w-full">
          {itemsList.map((item, index) => (
            <Card
              key={index}
              image="/assets/Dashboard/appointment.png"
              Name={item.name}
              description={`Description: Consists of materials made up of ${item.name}`}
              price={`Price: ${item.pricePerKg} rs/kg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyerSection;
