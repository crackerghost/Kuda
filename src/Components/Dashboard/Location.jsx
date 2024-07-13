import axios from 'axios';
import React, { useState } from 'react';

function Location() {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://kuda-three.vercel.app/location', {
        email: 'raj123@gmail.com',
        long: long,
        lat: lat
      });
      console.log('Location saved:', response.data);
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
          fetchData(); // Call fetchData to send location data to server
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className='h-[100vh] w-[100vw]'>
      <div>
        <button onClick={getLocation}>Get Location</button>
        {long !== 0 && lat !== 0 && (
          <p>
            Longitude: {long}, Latitude: {lat}
          </p>
        )}
      </div>
    </div>
  );
}

export default Location;
