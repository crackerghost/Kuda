


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
import icon1 from "../../assets/icon/icon1.png";
import icon2 from "../../assets/icon/icon2.png";
import icon3 from "../../assets/icon/icon3.png";
import icon4 from "../../assets/icon/icon4.png";
import icon5 from "../../assets/icon/icon5.png";
import icon6 from "../../assets/icon/icon6.png";

const cardData = [
  {
    title: "OUR STRATEGY",
    description:
      "Our strategy has always been to achieve success through customer satisfaction. We try and provide the best service and help find solutions for our suppliers and customers.",
    icon: icon1,
  },
  {
    title: "OUR STRENGTH",
    description:
      "Quality control has always been the backbone of any organization. GST is proud to share that our team will inspect your order regardless of size or distance.",
    icon: icon2,
  },
  {
    title: "LOGISTICS",
    description:
      "Transportation is a key element of international business and in order to serve our customers efficiently we handle all your inland and ocean freight under one roof.",
    icon: icon3,
  },
  {
    title: "OUR VISION",
    description:
      "We are committed to provide the best quality product with impeccable customer service and support.",
    icon: icon4,
  },
  {
    title: "OUR CUSTOMERS",
    description:
      "Global Scrap Trading, LLC is currently working with leading importers, exporters, traders and manufacturers.",
    icon: icon5,
  },
  {
    title: "OUR INTERESTS",
    description:
      "Metal scrap, plastic scrap and paper scrap as well as commercial trading in any kind of raw material.",
    icon: icon6,
  },
];

const Aspirations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="container mx-auto my-16 p-8 rounded-lg">
      <h2 className="text-3xl text-black font-bold text-center mt-8" data-aos="fade-up">
        Ethos & Aspirations
      </h2>
      <div className="w-10 h-1 bg-black mx-auto mt-2" data-aos="fade-up"></div>

      {/* Card container */}
      <div className="container mx-auto p-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {cardData.map((e, i) => (
            <div data-aos="fade-up" key={i}>
              <Card
                title={e.title}
                description={e.description}
                icon={e.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aspirations;