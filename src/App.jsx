import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function App() {
  const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   const checkLoad = () => {
  //     setTimeout(() => {
  //       setLoader(true);
  //     }, 1000);
  //   };

  //   window.addEventListener("load", checkLoad);

  //   return () => {
  //     window.removeEventListener("load", checkLoad);
  //   };
  // }, []);


  useEffect(() => {
    const fetchMapToken = async () => {
      try {
        const response = await axios.get('https://kudaserver.vercel.app/map-token');
        const token = response.data.token;
        localStorage.setItem("token",token)
      } catch (error) {
        console.error('Error fetching map token:', error);
        // Handle error as needed
      }
    };

    fetchMapToken();
  }, []);

  useEffect(() => {
    // const location = useLocation();
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
        toast.success("Valid User", {
          position: "top-center",
          autoClose: 1000,
        });
      } catch (error) {
        if (error.response && error.response.status === 500) {
          toast.error("Invalid User Auth", {
            position: "top-center",
            autoClose: 1000,
          });
        } else {
          toast.error("An error occurred", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      }
    };

    // if (!["/", "/signup", "/login"].includes(location.pathname)) {
    //   verifyToken();
    // }
    verifyToken();
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
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/overview/:email" element={<RagPickerCart/>} />
        <Route path="/buyer" element={<BuyDash/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
