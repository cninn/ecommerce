import React from "react";
import "./Hero.css";
import gift from "../Assets/gift.png";

import hero_image from "../Assets/hero_image.png";
import newproducts from "../Assets/newproducts.png";
import elli from "../Assets/elli.png";
import  { useEffect, useRef } from 'react';


const Hero = () => {
  const animatedElementRef = useRef();

  useEffect(() => {
    if (animatedElementRef.current) {
      animatedElementRef.current.classList.add('animate-elli');

      const intervalId = setInterval(() => {
        animatedElementRef.current.classList.toggle('animate-elli');
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <img ref={animatedElementRef} className="elli" src={elli} alt="elii" />

        <div className="hero-hand-icon">
          <img src={newproducts} alt="gift" />
        </div>

        <button className="hero-latest-btn">
          LATEST COLLECTIONS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero-img" />
        <img className="gift" src={gift} alt="gift" />
      </div>
    </div>
  );
};

export default Hero;
