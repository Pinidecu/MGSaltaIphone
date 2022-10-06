import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Image } from "cloudinary-react";
import { useState } from "react";
import {
  BorrarButton,
  Button,
  EIContainer,
  ICargadas,
  ICargadasContainer,
  ImagenButtons,
  ImagenContainer,
} from "./styled";

export default function EditarImagenes({ detalle, functions }) {
  const subirImagenes = function (e) {
    let urlsArray = [];
    for (let index = 0; index < e.target.files.length; index++) {
      var formdata = new FormData();
      formdata.append("file", e.target.files[index]);
      formdata.append("upload_preset", "iphonesalta");
      axios
        .post(`https://api.cloudinary.com/v1_1/ezequieldecu26/upload`, formdata)
        .then((response) => {
          console.log(response.data.url);
          urlsArray.push(response.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    functions.setImage({
      ...functions.image,
      nuevas: urlsArray,
    });
  };

  return (
    <EIContainer>
      <ICargadasContainer>
        <p>Imagenes cargadas</p>
        <ICargadas>
          {detalle.image
            ? detalle.image.map((i) => {
                return (
                  <ImagenContainer key={detalle.id}>
                    <ImagenButtons display={functions.image.borrar.includes(i)}>
                      <DeleteOutlined
                        style={{ fontSize: "35px", color: "white" }}
                      />
                      <Button onClick={() => functions.cancelarBorrado(i)}>
                        <CloseOutlined
                          style={{
                            fontSize: "15px",
                            color: "white",
                          }}
                        />
                      </Button>
                    </ImagenButtons>
                    <BorrarButton
                      display={functions.image.borrar.includes(i)}
                      onClick={() => functions.borrarImagen(i)}
                    >
                      <p className="text-white text-xs text-center mb-1 font-bold">
                        x
                      </p>
                    </BorrarButton>
                    <Image
                      cloudName="ezequieldecu26"
                      publicId={i}
                      width="100px"
                      height="100px"
                      className=" h-full object-contain object-center"
                      alt="iphone"
                    />
                  </ImagenContainer>
                );
              })
            : null}

          {detalle?.image?.length === 0 ? (
            <p className="text-xs text-slate-400">No hay imagenes</p>
          ) : null}
        </ICargadas>
      </ICargadasContainer>
      <label
        className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
        for="file_input"
      >
        Agregar imagen
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
        id="file_input"
        type="file"
        multiple
        onChange={(e) => {
          subirImagenes(e);
        }}
        name="image"
      />
    </EIContainer>
  );
}
