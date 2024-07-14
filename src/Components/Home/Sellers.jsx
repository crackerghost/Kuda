import React from "react";

const Sellers = () => {
  const sellerData = [
    {
      imgSrc: "/assets/Landingpage/shopping.png",
      title: "Wide network of suppliers for your needs",
      description:
        "With METYCLE you access a vast system of premium vetted suppliers and have the choice of all types of metal scrap and recycled metals. We don't charge any subscription fees.",
    },
    {
      imgSrc: "/assets/Landingpage/hassle.png",
      title: "Hassle-free shipping and customs",
      description:
        "Receiving goods is easy. METYCLE takes care of the whole journey for you and you stay informed about every step. Your logistics worries will be gone with our live container tracking.",
    },
    {
      imgSrc: "/assets/Landingpage/stock.png",
      title: "Enhanced liquidity with favourable payment terms",
      description:
        "METYCLE will help you boost your business: as a long-term customer with us, you can qualify for extended payment terms of up to 90 days.",
    },
    {
      imgSrc: "/assets/Landingpage/stockLine.png",
      title: "Seamless onboarding and quick responses",
      description:
        "Becoming a METYCLE customer doesn't require complicated paperwork - you hear back from us within a day. We don't charge any sign up fees.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">For Sellers</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <img
            src="/assets/Landingpage/sellersMain.svg"
            alt="Main Visual"
            className="rounded-md"
          />
        </div>

        <div className="w-full lg:w-3/4 ml-0 lg:ml-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sellerData.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <img className="w-12 h-12" src={item.imgSrc} alt="" />
                <p className="text-xl font-semibold mx-4">{item.title}</p>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;