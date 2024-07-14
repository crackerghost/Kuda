import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const RagPickerCart = () => {
  const { email } = useParams();
  const [items, setItems] = useState([]);
  const [data, setData] = useState({});
  const [scheduledTime, setScheduledTime] = useState('');
  const [address, setAddress] = useState('');
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 41.8781,
    longitude: -87.6298,
    zoom: 9
  });

  const MAPBOX_TOKEN = 'pk.eyJ1IjoicmFqOTUyMzMiLCJhIjoiY2x3ZmswNWUwMHlsajJrcWVhZDl1ajIzNiJ9.dWRwxHmPuDYkC-cfLepNUA'; // Replace with your Mapbox token

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://kudaserver.vercel.app/userData?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const userData = await response.json();
      if (userData && userData.user) {
        setData(userData.user);
        setItems(userData.user.items || []);
      } else {
        console.error('Unexpected data format:', userData);
        setItems([]);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setItems([]);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [email]);

  const handleScheduleChange = (e) => {
    setScheduledTime(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the scheduled time and address
    const orderDetails = {
      email: data.email,
      items: data.items,
      scheduledTime: scheduledTime,
      address: address,
      convenienceFee: 15
    };
    console.log('Order Details:', orderDetails);
    // Add your logic to handle order submission
  };

  const convenienceFee = 15;
  const total = convenienceFee;

  const handleViewportChange = (viewport) => {
    setViewport(viewport);
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between gap-8">
          <div className="w-2/3">
            <h2 className="text-mBold font-bold mb-6">Service Overview</h2>
            <p className="text-mlarge">Buyer: {data.firstName} {data.lastName}</p>
            <p className="text-mlarge">Email: {data.email}</p>
            <table className="min-w-full bg-blue-50 border">
              <thead>
                <tr>
                  <th className="py-2 border">Product</th>
                  <th className="py-2 border">Price per Kg</th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0 ? (
                  items.map((item) => (
                    <tr key={item._id}>
                      <td className="py-2 border text-center">{item.name}</td>
                      <td className="py-2 border text-center">₹{item.pricePerKg}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-2 border text-center" colSpan="2">No items found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="w-1/3 bg-blue-50 p-6 rounded-lg">
            <div className="border-t pt-4">
              <p className="flex justify-between">
                <span>Small charge is applicable as a Convenience Fee</span>
              </p>
              <p className="flex justify-between text-xl font-bold mt-2">
                <span>Convenience Fee:</span>
                <span>₹{total}</span>
              </p>
            </div>
            <div className="mt-6">
              <label htmlFor="scheduleTime" className="block mb-2 text-lg font-bold">Schedule Time:</label>
              <input
                type="datetime-local"
                id="scheduleTime"
                name="scheduleTime"
                value={scheduledTime}
                onChange={handleScheduleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div className="mt-6">
              <label htmlFor="address" className="block mb-2 text-lg font-bold">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Landmark, Area, locality"
                value={address}
                onChange={handleAddressChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <button type="submit" className="bg-blue-950 text-white w-full py-2 mt-4 rounded">
              Sell Now
            </button>
          </div>
        </div>
      </form>

      {/* Mapbox Map */}
      <div className="mt-8">
        <ReactMapGL
          {...viewport}
          mapboxAccessToken={MAPBOX_TOKEN}
          onViewportChange={handleViewportChange}
        >
          {data && data.location && data.location.coordinates ? (
            <Marker
              latitude={data.location.coordinates[1]}
              longitude={data.location.coordinates[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div>You are here</div>
            </Marker>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default RagPickerCart;
