import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


import { format, parseISO } from 'date-fns';

const formatDateTime = (isoString) => {
  try {
    const date = parseISO(isoString);
    return format(date, 'PPpp'); // Formats date and time in a readable format
  } catch (error) {
    console.error('Error parsing date:', error);
    return 'Invalid Date';
  }
};

const Card = ({ Name, Address, scheduledTime, Accept, Reject, onRequestAccept, onRequestReject }) => (
  <div className="bg-white p-4 rounded-2xl flex flex-col shadow-md mb-2">
    <div>
      <h3 className="text-3xl font-semibold">{Name}</h3>
      <p className="text-2xl text-blue-500 mt-2">{Address}</p>
      <p className="text-2xl text-blue-500 mt-2">{formatDateTime(scheduledTime)}</p>
    </div>
    <div>
      <button
        className='text-xl text-white py-3 px-7 mt-3 rounded-full border-green-500 bg-green-500'
        onClick={onRequestAccept}
      >
        {Accept}
      </button>
      <button
        className='text-xl text-white py-3 px-8 ml-5 rounded-full border-red-600 bg-red-600'
        onClick={onRequestReject}
      >
        {Reject}
      </button>
    </div>
  </div>
);

const MainContentBuy = ({ userData }) => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [res, setRes] = useState([]);
  const [buyerData, setBuyerData] = useState([]);
  const [requests, setRequests] = useState(userData.requests || []);

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
              'x-rapidapi-key': localStorage.getItem("token-loc"),
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

  const handleAcceptRequest = async (request) => {
    try {
      // Update status in your database (Buyer's side)
      const buyerResponse = await axios.post('https://kudaserver.vercel.app/sendApproveReq', {
        requesterEmail: localStorage.getItem("email"),
        status: 'Appointed',
        recipientEmail: request.requesterEmail,
        scheduledTime: request.scheduledTime,
        additionalData: request.additionalData
      });

      // Update status in requester's database
      const requesterResponse = await axios.post('https://kudaserver.vercel.app/updateRequestStatus', {
        requesterEmail: request.requesterEmail,
        recipientEmail: request.recipientEmail,
        requestID: request._id,
        status: 'Appointed'
      });

      toast.success("Status Updated", {
        position: "top-center",
        autoClose: 1000,
        onClose: () => {
          setRequests(requests.filter(r => r._id !== request._id));
        }
      });

      // Optionally, update UI or state to reflect the change
    } catch (error) {
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 1000,
      });
      console.error('Error accepting request:', error);
      // Handle error as needed
    }
  };

  const handleRejectRequest = async (request) => {
    try {
      // Update status in requester's database to rejected
      const requesterResponse = await axios.post('https://kudaserver.vercel.app/updateRequestStatus', {
        requesterEmail: request.requesterEmail,
        recipientEmail: request.recipientEmail,
        requestID: request._id,
        status: 'Rejected'
      });

      toast.success("Request Rejected", {
        position: "top-center",
        autoClose: 500,
        onClose: () => {
          setRequests(requests.filter(r => r._id !== request._id));
        }
      });

      // Optionally, update UI or state to reflect the change
    } catch (error) {
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 500,
      });
      console.error('Error rejecting request:', error);
      // Handle error as needed
    }
  };

  if (!cityName) {
    return null; // or loading indicator, depending on your UI needs
  }

  return (
    <>
      <ToastContainer />
      <div className="flex-1 p-4 overflow-y-auto h-auto w-full">
        <header className='text-2xl w-full m-3 '>
          <nav>
            <ul>
              <a className='text-white hover:font-[500] hover:text-white hover:text-[--btnColor--] hover:underline border bg-[--btnColor--] px-6 py-2 rounded-xl'>Buy</a>
            </ul>
          </nav>
        </header>
        <div className='flex h-auto'>
          <div className="flex-1 gap-4 mt-4 ml-6 h-1/4 w-2/3 ">
            {requests && requests.length > 0 ? (
              requests.map((request, index) => (
                request.status !== "Appointed" && request.status !== "Rejected" && (
                  <Card
                    key={index}
                    Name={`Request from ${request.requesterEmail}`}
                    Address={`Location: ${request.additionalData}`}
                    scheduledTime={`${request.scheduledTime}`}
                    Accept="Accept"
                    Reject="Reject"
                    onRequestAccept={() => handleAcceptRequest(request)}
                    onRequestReject={() => handleRejectRequest(request)}
                  />
                )
              ))
            ) : (
              <p>No requests found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContentBuy;
