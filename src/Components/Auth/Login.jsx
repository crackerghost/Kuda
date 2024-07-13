import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://kudaserver.vercel.app/verifyLogin", {
        email,
        pass,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 1000,
          onClose: () => {
            window.location.href = "/home";
          },
        });
      } else if (response.status === 400) {
        toast.error("Invalid login credentials. Please try again.", {
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        toast.error(`Unexpected status code: ${response.status}`, {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid login credentials. Please try again.", {
          position: "top-center",
          autoClose: 1000,
        });
      } else if (error.response.status === 401) {
        toast.error("User Not Found!", {
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        toast.error("An error occurred. Please try again later.", {
          position: "top-center",
          autoClose: 1000,
        });
      }
      console.error(error);
    }
  }

  return (
    <div className="container w-[100vw] h-[90vh] flex flex-row justify-center items-center bgLogin">
      <div className="w-1/2 h-full flex justify-center items-center  ">
        <form
          className="flex flex-col  h-auto w-[80%] mx-auto justify-center items-center rounded-xl py-8  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-blue-100/30 backdrop-blur-lg"
          onSubmit={handleSubmit}
        >
          <h1 className=" text-gray-950 text-3xl font-bold">Welcome Buddy</h1>
          <p>Login your account</p>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 rounded mt-8"
          />
          <input
            type="password"
            id="pass"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="mb-2 p-2 rounded"
          />
          <div className="w-[80%] mx-auto relative h-auto">
            <p className="text-gray-400 text-right ">
              <Link to="/forgetPassword">Forget Password ?</Link>
            </p>
            <p className="text-center my-4 ">Or Login With</p>
            <div className="flex gap-4 text-3xl justify-center">
              <FaGoogle />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>

          <button
            className="bg-[--btnColor--]  mt-10 flex justify-center items-center text-white p-4 rounded-md w-[80%] h-[15%] transition-all hover:scale-105"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
