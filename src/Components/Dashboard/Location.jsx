import axios from 'axios';
import React, { useState } from 'react';

function Location() {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.post('/location', {
        email: 'raj123@gmail.com',
        long,
        lat
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
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // useEffect to call fetchData when long and lat change
  React.useEffect(() => {
    if (long !== 0 && lat !== 0) {
      fetchData();
    }
  }, [long, lat]);

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
