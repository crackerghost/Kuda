import React, { useEffect, useState } from 'react';
import LeftSidebar from './LeftSidebar';

const Card = ({ scheduledTime, status, additionalData,email }) => (
  <div className="bg-white p-4 rounded-2xl flex shadow-md mb-2 w-full">
    <div className="flex-grow ml-4">
      <p className="text-4xl text-blue-500 mt-3">Appointment</p>
      <p className="text-2xl text-gray-500 mt-5">Scheduled Time: {new Date(scheduledTime).toLocaleString()}</p>
      <p className="text-mlarge text-white mt-3 bg-green-500 rounded-full w-[150px] h-[50px] flex justify-center items-center">{status}</p>
      <p className="text-2xl text-gray-500 mt-3">Buyer Email : {email}</p>

      <p className="text-2xl text-gray-500 mt-3">Your Address: {additionalData}</p>
    </div>
  </div>
);

function Approve() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const email = localStorage.getItem("email");

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

      const data = await response.json();
      setUserData(data.user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return  <div className="loader">
    <img src="/assets/Landingpage/loading.gif" alt="Loading..." />
  </div>
  }

  return (
    <div className='flex'>
      <LeftSidebar userData={userData} />
      <div className="w-[70%] ml-3">
        <h1 className="text-3xl m-6">Approved Requests</h1>
        <div className="flex flex-col h-auto w-full">
          {userData.requests.map((request, index) => (
            <Card
              key={index}
              scheduledTime={request.scheduledTime}
              status={request.status}
              additionalData={request.additionalData}
              email={request.requesterEmail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Approve;
