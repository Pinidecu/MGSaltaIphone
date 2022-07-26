import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import portada1 from "../../Imagenes/portada1.jpg";
import portada2 from "../../Imagenes/portada2.jpg";
import portada3 from "../../Imagenes/portada3.jpg";



class Carrousel extends Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="h-[400px] ">
          <img
            src={portada1}
            alt="aa"
            width="100%"
            height="400px"
            className=" h-full"
          />
        </div>
        <div className="h-[400px] ">
          <img
            src={portada2}
            alt="aa"
            width="100%"
            height="400px"
            className=" h-full"
          />
        </div>
        <div className="h-[400px] bg-blue-200">
          <img src={portada3} alt="aa" className=" h-full" />
        </div>
      </Carousel>
    );
  }
}


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

export default Carrousel;
