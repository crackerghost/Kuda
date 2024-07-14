// import { useState } from "react";
// import faqImg from "../../assets/icon/faq.png";

// const faqs = [
//   {
//     question: "1. Lorem ipsum dolor sit amet consectetur. Sagittis id.",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultricies consectetur consequat tellus massa. Nec aliquam cras sagittis quis sed euismod orci hac. Orci amet ligula ornare lacus aliquam ornare. Et lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam.",
//   },
//   {
//     question: "2. Lorem ipsum dolor sit amet consectetur. Viverra.",
//     answer: "Answer for question 2",
//   },
//   {
//     question: "3. Lorem ipsum dolor sit amet consectetur. Viverra.",
//     answer: "Answer for question 3",
//   },
//   {
//     question: "4. Lorem ipsum dolor sit amet consectetur. Viverra.",
//     answer: "Answer for question 4",
//   },
//   {
//     question: "5. Lorem ipsum dolor sit amet consectetur. Viverra.",
//     answer: "Answer for question 5",
//   },
// ];

// const Faq = () => {
//   const [selected, setSelected] = useState(null);

//   const toggle = (i) => {
//     if (selected === i) {
//       return setSelected(null);
//     }
//     setSelected(i);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <div className="flex w-full">
//         <div className=" rounded-lg p-6 w-1/2">
//           <h2 className="text-6xl font-bold mb-6">
//             Frequently <br /> Asked Questions
//           </h2>
//           {faqs.map((faq, i) => (
//             <div key={i} className="mb-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
//               <div
//                 className="flex justify-between items-center cursor-pointe p-4 rounded-lg"
//                 onClick={() => toggle(i)}
//               >
//                 <h3 className="text-lg font-medium">{faq.question}</h3>
//                 <span className="h-8 w-8 cursor-pointer bg-black text-white flex justify-center items-center text-2xl">{selected === i ? "-" : "+"}</span>
//               </div>
//               <div
//                 className={`mt-2 p-4 ${selected === i ? "block" : "hidden"}`}
//               >
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6 w-1/2 object-contain">
//           <img src={faqImg} alt="FAQ Illustration" className="w-[80%] rounded-md" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;


import React, { useState, useEffect } from "react";
import faqImg from "../../assets/icon/faq.png";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "1. What is the purpose of this website?",
    answer:
      "This website aims to connect ragpickers with recycling centers and individuals who want to dispose of their waste responsibly. It also serves as an educational resource on the importance of recycling and waste management.",
  },
  {
    question: "2. How do I schedule a waste pickup?",
    answer:
      "You can schedule a waste pickup by visiting our 'Schedule Pickup' page, filling out the required details, and selecting a convenient date and time for the collection.",
  },
  {
    question: "3. How can ragpickers register on the website?",
    answer:
      "Ragpickers can register by visiting our 'Register' page and filling out the registration form with their personal details and areas of operation.",
  },
  {
    question: "4.  How can I contact you for more information?",
    answer:
      "You can contact us via the form on our 'Contact Us' page, by email at info@ragpickingwebsite.com, or by phone at (123) 456-7890. We are always here to help with any questions or concerns.",
  },
  {
    question: "5. Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer: "Answer for question 5",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="rounded-lg p-6 lg:w-1/2" data-aos="fade-right">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Frequently <br /> Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="mb-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              data-aos="fade-up"
            >
              <div
                className="flex justify-between items-center cursor-pointer p-4 rounded-lg bg-inherit"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="h-8 w-8 cursor-pointer bg-black text-white flex justify-center items-center text-2xl">
                  {selected === i ? "-" : "+"}
                </span>
              </div>
              <div
                className={`mt-2 p-4 ${selected === i ? "block" : "hidden"}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex justify-center mt-6 lg:mt-0 lg:w-1/2"
          data-aos="fade-left"
        >
          <img
            src={faqImg}
            alt="FAQ Illustration"
            className="w-[80%] rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
