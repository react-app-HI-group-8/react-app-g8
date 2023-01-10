import React from "react";
import "./Banner.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HEADING_NAME = {
  gallery: "NFT GALLERY",
  marketPlace: "OUR MARKETPLACE",
};

const Banner = ({ headingType }) => {
  const [heading] = useTypewriter({
    words: [HEADING_NAME[headingType]],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 100,
  });

  return (
    <div className="banner">
      <h2>{heading}</h2>
      <Cursor cursorColor="white" cursorBlinking={false} />
    </div>
  );
};

export default Banner;
