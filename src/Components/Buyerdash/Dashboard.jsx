import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSidebar from './Leftsidebar'; // Adjust the path as needed
import MainContentBuy from './MainContentBuy'; // Adjust the path as needed

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();




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

  useEffect(() => {
    if (userData && userData.role !== "Buyer") {
      navigate('/home'); // Assuming you have a route for the Buyer component
    }
  }, [userData, navigate]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  const handleSidebarClick = (path) => {
    navigate(path);
  };
  return (
    <div className="flex">
      <LeftSidebar userData={userData} /> 
      <MainContentBuy userData={userData} />
    </div>
  );
};

export default Dashboard;
