import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../data";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="carousel-wrapper">
        <Carousel
          axis={"horizontal"}
          showArrows={true}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
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
  );
};

export default Gallery;
