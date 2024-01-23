import React from "react";
import "./Offers.css";
import offers from "../Assets/exclusive_image.png";
import { useState, useEffect } from "react";

const Offers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="offers">
      <div className="offers-left">
        <span>EXCLUSİVE</span>
        <span>OFFERS FOR YOU</span>
        <span>ONLY ON BEST SELLERS PRODUCT</span>
        <button>CHECK NOW</button>
      </div>
      <div className="offers-rigth">
        <img
          className={`${scrollPosition > 950 ? "animate" : ""}`}
          src={offers}
          alt="offers"
        />
      </div>
    </div>
  );
};

export default Offers;
