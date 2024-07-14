import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Card from './Card';
import RecentMessages from './Recentmsg';
import axios from 'axios';

const MainContent = ({ userData }) => {
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [result, setRes] = useState(0);
  const [buyerData, setBuyerData] = useState([]);
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFqOTUyMzMiLCJhIjoiY2x3ZmswNWUwMHlsajJrcWVhZDl1ajIzNiJ9.dWRwxHmPuDYkC-cfLepNUA'; // Replace with your Mapbox access token

    if (lat !== null && long !== null) {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [long, lat],
        zoom: 9
      });

      map.addControl(new mapboxgl.NavigationControl());

      return () => map.remove();
    }
  }, [lat, long]);

  useEffect(() => {
    const fetchData = async () => {
      if (long !== null && lat !== null && cityName) {
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
              cityName
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Location saved:', data);
          setRes(data.length);
          setBuyerData(data.usersWithinRadius);
        } catch (error) {
          console.error('Error saving location:', error);
        }
      }
    };

    fetchData();
  }, [long, lat, cityName]);

  useEffect(() => {
    const fetchLocation = async () => {
      if (lat === null || long === null) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          const { longitude, latitude } = position.coords;
          setLong(longitude.toFixed(4));
          setLat(latitude.toFixed(4));

          const options = {
            method: 'GET',
            url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
            params: {
              lat: latitude,
              lng: longitude
            },
            headers: {
              'x-rapidapi-key': 'b25121b381msh09da0d56b03f926p114fc4jsnd0bb1e7aedc6',
              'x-rapidapi-host': 'address-from-to-latitude-longitude.p.rapidapi.com'
            }
          };

          const response = await axios.request(options);
          console.log(response.data);
          if (response.data.Results.length > 0) {
            const city = response.data.Results[0].city;
            setCityName(city);
          } else {
            console.error('No city found in response');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchLocation();
  }, [lat, long]);

  const getRandomImage = () => {
    const images = [
      "/assets/Dashboard/img/electric.jpg",
      "/assets/Dashboard/img/metal.jpg",
      "/assets/Dashboard/img/paper.jpg",
      "/assets/Dashboard/img/plastic.jpg",
      "/assets/Dashboard/img/rubber.jpg",
      "/assets/Dashboard/img/glass.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

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
                img={getRandomImage()}
                type={`${buyer.firstName} ${buyer.lastName}`}
                price="To be determined"
                location={buyer.location ? `${buyer.city}` : "Unknown location"}
                firstName={buyer.firstName}
                lastName={buyer.lastName}
                items={buyer.items}
                email={buyer.email}
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
      <div id="map" style={{ height: '400px' }}></div>
    </div>
  );
};

export default MainContent;
