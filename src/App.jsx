import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Common/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import RagPickerCart from "./Components/Cart/RagPicker";
import BuyDash from "./Components/Buyerdash/Dashboard";
import TawkTo from "./Components/TawkTo";
import BuyerSection from "./Components/Buyerdash/BuyerSection";
import Approve from "./Components/Dashboard/Approve";

function App() {
  const [loader, setLoader] = useState(true);
 
  

  useEffect(() => {
    const fetchMapToken = async () => {
      try {
        const response = await axios.get('https://kudaserver.vercel.app/map-token');
        const token = response.data.token;
        localStorage.setItem("token-loc", token);
      } catch (error) {
        console.error('Error fetching map token:', error);
      }
    };

    fetchMapToken();
  }, []);

  if (!loader) {
    return (
      <div className="loader">
        <img src="/assets/Landingpage/loading.gif" alt="Loading..." />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(
          "https://kudaserver.vercel.app/verifytoken",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      

      } catch (error) {
        if (error.response && error.response.status === 500) {
         
        } else {
          toast.error("An error occurred", {
            position: "top-center",
            autoClose: 500,
          });
        }
      }
    };

    if (!["/", "/signup", "/login","/register","/overview"].includes(location.pathname)) {
     if(localStorage.getItem('token') == null){
      navigate('/')
     }

    }
    verifyToken();
  }, [location.pathname]);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/overview/:email" element={<RagPickerCart />} />
        <Route path="/buyer" element={<BuyDash />} />
        <Route path="/add-items" element={<BuyerSection />} />
        <Route path="/approved-requests" element={<Approve />} />
      </Routes>
      <TawkTo />
    </>
  );
}

export default App;
