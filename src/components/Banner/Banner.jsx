import React from "react";
import "./Banner.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HEADING_NAME = {
  gallery: "-GALLERY GALLERY-",
  marketPlace: "-MARKETPLACE MARKETPLACE- ",
};

const Banner = ({ headingType }) => {
  const [heading] = useTypewriter({
    words: [HEADING_NAME[headingType]],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  });

  return (
    <div className="banner">
      <h2>{heading}</h2>
      <Cursor cursorColor="white" />
    </div>
  );
};

export default Banner;
