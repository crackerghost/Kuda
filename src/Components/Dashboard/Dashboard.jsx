import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSidebar from './LeftSidebar'; // Adjust the path as needed
import MainContent from './MainContent'; // Adjust the path as needed

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
    if (userData && userData.role !== "Seller") {
      navigate('/buyer'); // Assuming you have a route for the Buyer component
    }
  }, [userData, navigate]);

 

  return (
    <div className="flex">
      <LeftSidebar userData={userData} />
      <MainContent userData={userData} />
    </div>
  );
};

export default Dashboard;
