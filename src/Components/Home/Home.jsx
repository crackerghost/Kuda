import React, { useEffect } from 'react';
import Hero from './Hero';
import Buyers from './Buyers';
import Sellers from './Sellers';
import About from './About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to(".Buyers", {
        x: "-100%",
        scrollTrigger: {
          trigger: ".Buyers",
          start: "220vh",
          end: "bottom 0%",
          scrub: 1,
        }
      });
  
      // Animation for Sellers section
      gsap.to(".Seller", {
        x: "0%",
        scrollTrigger: {
          trigger: ".Seller",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        }
      });
  }, []);

  return (
    <>
      <Hero />
      <Buyers />
      <Sellers />
      <About />
    </>
  );
}

export default Home;
