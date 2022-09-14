import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ImgPortada } from "./styled";

function CarrouselPortada({ imagenes }) {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {imagenes?.map((imagen) => {
        return <ImgPortada src={imagen} alt="portada1" key={imagen} />;
      })}
    </Carousel>
  );
}

export default CarrouselPortada;
