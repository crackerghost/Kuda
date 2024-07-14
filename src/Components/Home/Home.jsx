import { useEffect } from "react";
import Hero from "./Hero";
import Buyers from "./Buyers";
import Sellers from "./Sellers";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aspirations from "./Aspirations";
import Faq from "./Faq";
import MapSection from "./MapSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
 

    // Animation for Sellers section
    gsap.to(".Seller", {
      x: "0%",
      scrollTrigger: {
        trigger: ".Seller",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <Hero />
      <Buyers />
      <Sellers />
      <Aspirations />
      <MapSection />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
