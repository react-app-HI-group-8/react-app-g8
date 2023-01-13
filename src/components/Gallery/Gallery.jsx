import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../data";
import Banner from "../Banner/Banner";
import "./Gallery.scss";

const Gallery = () => {
  // todo: add 1 of 10 to the bottom
  return (
    <div id="gallery">
      <Banner headingType="gallery" />
      <section className="gallery">
        <div className="carousel-wrapper">
          <Carousel
            axis={"horizontal"}
            showArrows={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
          >
            {images.map((img) => (
              <div className="carousel" key={img.id}>
                <img className="carousel_img" src={img.link} alt={img.title} />
                <div className="carousel_info">
                  <h3>{img.title}</h3>
                  <h4>{img.role}</h4>
                  <p>{img.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
