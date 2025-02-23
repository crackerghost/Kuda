import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ Name, Address, scheduledTime, Accept, Reject, status, onRequestAccept, onRequestReject }) => (
  <div className="bg-white p-4 rounded-2xl flex flex-col shadow-md mb-2">
    <div>
      <h3 className="text-3xl font-semibold">{Name}</h3>
      <p className="text-2xl text-blue-500 mt-2">{Address}</p>
      <p className="text-2xl text-blue-500 mt-2">Scheduled At : {new Date(scheduledTime).toLocaleString()}</p>
      <p className={`text-2xl mt-2 ${status === 'Appointed' ? 'text-green-500' : 'text-gray-500'}`}>{status}</p>
    </div>
    {status !== 'Appointed' && status !== 'Rejected' && (
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
    )}
  </div>
);

const MainContentBuy = ({ userData }) => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [requests, setRequests] = useState(userData.requests || []);

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
    toast.success("Please Wait..", {
      position: "top-center",
      autoClose: 500,
    });
    try {
      const response = await axios.post('https://kudaserver.vercel.app/sendApproveReq', {
        requesterEmail: localStorage.getItem("email"),
        status: 'Appointed',
        recipientEmail: request.requesterEmail,
        scheduledTime: request.scheduledTime,
        additionalData: request.additionalData
      });

      console.log('Buyer response:', response.data);

      const requesterResponse = await axios.post('https://kudaserver.vercel.app/updateRequestStatus', {
        requesterEmail: request.requesterEmail,
        recipientEmail: request.recipientEmail,
        requestID: request._id,
        status: 'Appointed'
      });

      console.log('Requester response:', requesterResponse.data);

      toast.success("Status Updated", {
        position: "top-center",
        autoClose: 1000,
        onClose: () => {
          const updatedRequests = requests.filter(r => r._id !== request._id);
          setRequests(updatedRequests);
        }
      });

    } catch (error) {
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 1000,
      });
      console.error('Error accepting request:', error);
    }
  };

  const handleRejectRequest = async (request) => {
    toast.success("Please Wait..", {
      position: "top-center",
      autoClose: 500,
    });
    try {
      const requesterResponse = await axios.post('https://kudaserver.vercel.app/updateRequestStatus', {
        requesterEmail: request.requesterEmail,
        recipientEmail: request.recipientEmail,
        requestID: request._id,
        status: 'Rejected'
      });

      console.log('Requester response:', requesterResponse.data);

      toast.success("Request Rejected", {
        position: "top-center",
        autoClose: 500,
        onClose: () => {
          const updatedRequests = requests.filter(r => r._id !== request._id);
          setRequests(updatedRequests);
        }
      });

    } catch (error) {
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 500,
      });
      console.error('Error rejecting request:', error);
    }
  };

  if (!cityName) {
    return null; // or loading indicator, depending on your UI needs
  }

  return (
    <>
      <ToastContainer />
      <div className="flex-1 p-4 overflow-y-auto h-auto w-full">
        <div className='flex h-auto'>
          <div className="flex-1 gap-4 mt-4 ml-6 h-1/4 w-2/3 ">
            {requests && requests.length > 0 ? (
              <>
                {requests.some(request => request.status === "Appointed" || request.status === "Rejected") ? (
                  requests.map((request, index) => (
                    request.status !== "Appointed" && request.status !== "Rejected" ? (
                      <Card
                        key={index}
                        Name={`Request from ${request.requesterEmail}`}
                        Address={`Location: ${request.additionalData}`}
                        scheduledTime={`${request.scheduledTime}`}
                        Accept="Accept"
                        Reject="Reject"
                        status={request.status}
                        onRequestAccept={() => handleAcceptRequest(request)}
                        onRequestReject={() => handleRejectRequest(request)}
                      />
                    ) : null
                  ))
                ) : (
                  <img src='/assets/New folder/empty.gif' alt='No requests' />
                )}
              </>
            ) : (
              <img src='/assets/New folder/empty.gif' alt='No requests' />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContentBuy;
