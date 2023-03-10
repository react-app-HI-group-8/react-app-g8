import React from "react";
import Button from "../Button/Button";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="left">
        <h1>COOLEST NFT SHOP</h1>
        <div className="display_mobile">
          <Button
            buttonType="btnWhite"
            type="button"
            onClick={() => {
              window.location.href = "#marketplace";
            }}
          >
            BUY NFT
          </Button>
        </div>
        <p>
          WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT
          AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
        </p>
        <img
          className="circle_element"
          src="/imgs/circle_element.png"
          alt="circle_element"
        />
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
