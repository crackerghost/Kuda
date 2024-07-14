import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kyc, setKyc] = useState("");
  const [idProof, setIdProof] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    toast.success("Please Wait..", {
      position: "top-center",
      autoClose: 1000,
    });
    try {
      const response = await axios.post(
        "https://kudaserver.vercel.app/register",
        {
          firstName,
          lastName,
          kyc,
          email,
          pass,
          role,
          idProof,
        }
      );

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        toast.success("Register Success!", {
          position: "top-center",
          autoClose: 1000,
          onClose: () => {
            if(response.data.role === "Seller"){
              navigate('/home');
            }else{
              navigate('/buyer');
            }
          },
        });
      } else if (response.status === 400) {
        toast.error("User Already Exists", {
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
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 1000,
      });

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
          <h1 className=" text-gray-950 text-3xl font-bold">
            Welcome to WasteWise
          </h1>
          <p>Tell us about yourself</p>

          <div className="flex w-[83%] mx-auto gap-x-4 mt-8">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mb-2 p-2 rounded"
              required
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mb-2 p-2 rounded"
              required
            />
          </div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 rounded"
            required
          />

          <div className="flex w-[83%] mx-auto gap-x-4 my-1">
            {/* Account Type */}
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 rounded bg-white w-1/2 text-gray-700"
              required
            >
              <option value="" className="text-gray-500">
                Account Type
              </option>
              <option value="Seller" className="text-gray-700">
                Seller
              </option>
              <option value="Buyer" className="text-gray-700">
                Buyer
              </option>
            </select>
            {/* Id Proof */}
            <select
              id="idProof"
              value={idProof}
              onChange={(e) => setIdProof(e.target.value)}
              className="p-2 rounded bg-white w-1/2 text-gray-700"
              required
            >
              <option value="" className="text-gray-500">
                Id Proof
              </option>
              <option value="Aadhaar Card" className="text-gray-700">
                Aadhaar Card
              </option>
              <option value="Pan Card" className="text-gray-700">
                PAN Card
              </option>
            </select>
          </div>

          <input
            type="text"
            id="kyc"
            placeholder="Verification ID"
            value={kyc}
            onChange={(e) => setKyc(e.target.value)}
            className="mb-2 p-2 rounded"
            required
          />

          <input
            type="password"
            id="pass"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="mb-2 p-2 rounded"
            required
          />
          <button
            className="bg-[--btnColor--]  mt-4 flex justify-center items-center text-white p-4 rounded-md w-[80%] h-[15%] transition-all hover:scale-105"
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

export default Register;
