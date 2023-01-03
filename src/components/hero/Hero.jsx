import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="gallery">
      <div className="left">
        <h2>virtual world</h2>
        <p>
          WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT
          AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
        </p>
      </div>
      <div className="right">
        <div className="right_bg">
          <img
            className="hero_circle"
            src="/imgs/hero_circle.png"
            alt="hero_circle"
          />
          <img className="hero_img" src="/imgs/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
