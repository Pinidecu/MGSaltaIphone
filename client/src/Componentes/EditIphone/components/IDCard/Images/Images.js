import { Carousel } from "react-responsive-carousel";
import { Image } from "cloudinary-react";
import { ImagesContainer } from "./styled";

export default function Images({ detalle, color }) {
  console.log("IFC: ", detalle.imageForColor);
  return (
    <ImagesContainer>
      <Carousel infiniteLoop showThumbs={false}>
        {detalle.imageForColor && color && detalle.imageForColor[color]
          ? detalle.imageForColor[color].map((image) => {
              return (
                <Image
                  cloudName="ezequieldecu26"
                  publicId={image}
                  alt="iphone"
                  key={detalle.id}
                />
              );
            })
          : detalle.image?.map((image) => {
              return (
                <Image
                  cloudName="ezequieldecu26"
                  publicId={image}
                  alt="iphone"
                  key={detalle.id}
                />
              );
            })}
      </Carousel>
    </ImagesContainer>
  );
}
