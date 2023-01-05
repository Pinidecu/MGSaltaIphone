import { Carousel } from "react-responsive-carousel";
import { Image } from "cloudinary-react";
import {
  ConfirmContainer,
  EBContainer,
  Edit,
  ImagesContainer,
  Modal,
} from "./styled";
import EditButton from "../../EditButton/EditButton";
import ConfirmEdit from "../../ConfirmEdit/ConfirmEdit";
import EditarImagenes from "./EditarImagenes/EditarImagenes";

export default function Images({ detalle, color, admin, functions }) {
  return (
    <ImagesContainer>
      {functions.editInput.image ? (
        <Edit>
          <EditarImagenes detalle={detalle} functions={functions} />
          <Modal />
          <ConfirmContainer>
            <ConfirmEdit
              name="image"
              functions={functions}
              input={functions.input}
              setInput={functions.setInput}
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
              edit={functions.edit}
              detalle={detalle}
            />
          </ConfirmContainer>
        </Edit>
      ) : (
        <div>
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
          {admin ? (
            <EBContainer>
              <EditButton
                name="image"
                editInput={functions.editInput}
                setEditInput={functions.setEditInput}
                black
              />
            </EBContainer>
          ) : null}
        </div>
      )}
    </ImagesContainer>
  );
}
