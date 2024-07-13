import React from "react";

function Buyers() {
  return (
    <div className="containers Buyers">
      <div className="w-[90%]">
        <h1 className="text-mBold">For buyers</h1>
      </div>
      <div className="inner-container buyers">
        <div className="first">
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px]"
              src="/assets/Landingpage/shopping.png"
              alt=""
            />
            <p className="text-mlarge mx-4">
              Wide network of suppliers for your needs
            </p>
          </div>
          <p className="text-mSmall">
            With METYCLE you access a vast system of premium vetted suppliers
            and have the choice of all types of metal scrap and recycled metals.
            We don't charge any subscription fees.
          </p>
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px] "
              src="/assets/Landingpage/hassle.png"
              alt=""
            />
            <p className="text-mlarge  mx-4">
              Hassle-free shipping and customs
            </p>
          </div>
          <p className="text-mSmall">
            Receiving goods is easy. METYCLE takes care of the whole journey for
            you and you stay informed about every step. Your logistics worries
            will be gone with our live container tracking.
          </p>
        </div>
        <div className="second">
          <div className="flex items-center">
            <img
              className="w-[48px] h-[48px]"
              src="/assets/Landingpage/stock.png"
              alt=""
            />
            <p className="text-mlarge mx-4">
              Enhanced liquidity with favourable payment terms
            </p>
          </div>
          <p className="text-mSmall">
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
            <p className="text-mlarge  mx-4">
              Seamless onboarding and quick responses
            </p>
          </div>
          <p className="text-mSmall">
            Becoming a METYCLE customer doesn't require complicated paperwork -
            you hear back from us within a day. We don't charge any sign up
            fees.
          </p>
        </div>

        <div className="last flex justify-center items-center">
          <img src="/assets/Landingpage/buyersMain.svg" alt=""  className="rounded-md"/>
        </div>
      </div>
      
    </div>
  );
}

export default Buyers;
