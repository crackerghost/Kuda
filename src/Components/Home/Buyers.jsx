import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Buyers() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 lg:px-8 mt-20 m:mt-4">
      <div className="w-full  mb-8" data-aos="fade-up">
        <h1 className="text-4xl font-semibold">For Buyers</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-8" data-aos="fade-right">
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px]"
              src="/assets/Landingpage/shopping.png"
              alt=""
            />
            <p className="text-lg mx-4">
              Wide network of suppliers for your needs
            </p>
          </div>
          <p className="text-sm">
            With METYCLE you access a vast system of premium vetted suppliers
            and have the choice of all types of metal scrap and recycled metals.
            We don't charge any subscription fees.
          </p>
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px]"
              src="/assets/Landingpage/hassle.png"
              alt=""
            />
            <p className="text-lg mx-4">Hassle-free shipping and customs</p>
          </div>
          <p className="text-sm">
            Receiving goods is easy. METYCLE takes care of the whole journey for
            you and you stay informed about every step. Your logistics worries
            will be gone with our live container tracking.
          </p>
        </div>
        <div className="space-y-8" data-aos="fade-left">
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px]"
              src="/assets/Landingpage/stock.png"
              alt=""
            />
            <p className="text-lg mx-4">
              Enhanced liquidity with favourable payment terms
            </p>
          </div>
          <p className="text-sm">
            METYCLE will help you boost your business: as a long-term customer
            with us, you can qualify for extended payment terms of up to 90
            days.
          </p>
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px]"
              src="/assets/Landingpage/stockLine.png"
              alt=""
            />
            <p className="text-lg mx-4">
              Seamless onboarding and quick responses
            </p>
          </div>
          <p className="text-sm">
            Becoming a METYCLE customer doesn't require complicated paperwork -
            you hear back from us within a day. We don't charge any sign up
            fees.
          </p>
        </div>
        <div
          className="col-span-1 flex justify-center items-center"
          data-aos="zoom-in"
        >
          <img
            src="/assets/Landingpage/buyersMain.svg"
            alt=""
            className="rounded-md w-full lg:w-3/4"
          />
        </div>
      </div>
    </div>
  );
}

export default Buyers;