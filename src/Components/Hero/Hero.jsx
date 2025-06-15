import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">                    
         
                     <p>Hey!</p>
          
          <p>Discover</p>
          <p>Your Next Obsession..</p>
    
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
