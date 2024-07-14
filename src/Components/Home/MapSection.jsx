import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import map from "../../assets/icon/map.png";

const cities = [
  { name: "Bhilai", status: "active" },
  { name: "Indore", status: "active" },
  { name: "Delhi", status: "active" },
  { name: "Nagpur", status: "active" },
  { name: "Haryana", status: "active" },
  { name: "Ahmedabad", status: "active" },
  { name: "Mumbai", status: "coming soon" },
  { name: "Pune", status: "coming soon" },
  { name: "Bangalore", status: "coming soon" },
  { name: "Hyderabad", status: "coming soon" },
];

const City = ({ name, status }) => {
  const statusClass =
    status === "active"
      ? "bg-blue-950 text-white h-9"
      : "bg-gray-100 text-black";

  return (
    <div
      className={`px-3 py-1 rounded-md ${statusClass} m-1`}
      data-aos="fade-up"
    >
      <p>{name}</p>
      <p
        className={`text-sm text-gray-600 ${
          status === "active" ? "hidden" : "text-sm"
        }`}
      >
        {status}
      </p>
    </div>
  );
};

const MapSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto my-16 p-8 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Covering Every Corner of the Nation
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The WasteWise has launched services in{" "}
            <span className="font-bold text-black">5 major Indian cities</span>{" "}
            and is now extending its presence across the nation.
          </p>
          <div className="flex flex-wrap">
            {cities.map((city, index) => (
              <City key={index} name={city.name} status={city.status} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center" data-aos="fade-left">
          <img src={map} alt="India Map" className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default MapSection;