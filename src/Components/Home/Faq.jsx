import { useState } from "react";
import faqImg from "../../assets/icon/faq.png";

const faqs = [
  {
    question: "1. Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultricies consectetur consequat tellus massa. Nec aliquam cras sagittis quis sed euismod orci hac. Orci amet ligula ornare lacus aliquam ornare. Et lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam.",
  },
  {
    question: "2. Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer: "Answer for question 2",
  },
  {
    question: "3. Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer: "Answer for question 3",
  },
  {
    question: "4. Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer: "Answer for question 4",
  },
  {
    question: "5. Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer: "Answer for question 5",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex w-full">
        <div className=" rounded-lg p-6 w-1/2">
          <h2 className="text-6xl font-bold mb-6">
            Frequently <br /> Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div
                className="flex justify-between items-center cursor-pointe p-4 rounded-lg"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="h-8 w-8 cursor-pointer bg-black text-white flex justify-center items-center text-2xl">{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={`mt-2 p-4 ${selected === i ? "block" : "hidden"}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 w-1/2 object-contain">
          <img src={faqImg} alt="FAQ Illustration" className="w-[80%] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
