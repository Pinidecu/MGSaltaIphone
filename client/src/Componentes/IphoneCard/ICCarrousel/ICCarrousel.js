import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "cloudinary-react";
import { ICImgsContainer } from "./styled";

export default function ICCarrousel({ images, id }) {
  return (
    <ICImgsContainer>
      <Carousel infiniteLoop showThumbs={false}>
        {images
          ? images.map((image) => {
              return (
                <Image
                  cloudName="ezequieldecu26"
                  publicId={image}
                  key={image}
                />
              );
            })
          : null}
      </Carousel>
    </ICImgsContainer>
  );
}
