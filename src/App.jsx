// import { useEffect, useState } from 'react'
// import './App.css'
// import { BrowserRouter ,Routes,Route } from 'react-router-dom'
// import Home from './Components/Home/Home'

// function App() {
//   const [loader, setLoader] = useState(false)

//   useEffect(()=>{
//     const checkLoad = ()=>{
//       setTimeout(() => {
//         setLoader(true);
//       },2000);

//     }

//     window.addEventListener("load", checkLoad)

//     return () => {
//       window.removeEventListener('load', checkLoad);
//     };

//   },[])

//   if(!loader){
//   return(
//     <div className='loader'>
//       <img src="/assets/Landingpage/loading.gif" alt="" />
//     </div>
//   )
//   }

//   return (

//     <BrowserRouter>
//     <Routes>
//     <Route path='/' element={<Home/>}/>
//     </Routes>
//     </BrowserRouter>

//   )
// }

// export default App

import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Common/Navbar";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const checkLoad = () => {
      setTimeout(() => {
        setLoader(true);
      }, 2000);
    };

    window.addEventListener("load", checkLoad);

    return () => {
      window.removeEventListener("load", checkLoad);
    };
  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("/verifytoken", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
