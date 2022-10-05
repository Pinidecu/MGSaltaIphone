import { useEffect, useState } from "react";
import IphoneCard from "../IphoneCard/IphoneCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAccesorios } from "../../store/Actions";
import {
  NIForm,
  NIInput,
  NPContainer,
  NuevoIphoneContainer,
  InputContainer,
  ColorsContainer,
  ACButton,
  NewColorForm,
  NIInputselect,
} from "./styled";
import { PrimaryButton } from "../styledComponents";

function NuevoAccesorioForm() {
  const push = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    nombre: "",
    price: "",
    image: null,
    descripcion: "",
    categoria: "",
  });

  const [muestra, setMuestra] = useState([
    "https://res.cloudinary.com/ezequieldecu26/image/upload/v1663258868/wvknszofv5krvxyjzr5w.webp",
  ]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const subirImagenesCloudinary = function (e) {
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
    setInput({
      ...input,
      [e.target.name]: urlsArray,
    });
  };

  const crearAccesorios = async function (e) {
    e.preventDefault();

    let obj = {
      name: input.nombre,
      price: input.price,
      image: input.image,
      descripcion: input.descripcion,
      categoria: input.categoria,
    };

    axios.post(`http://localhost:3001/accesorios`, obj).then((response) => {
      console.log(response);
      alert("Accesorio cargado exitosamente");
      dispatch(getAccesorios());
      push("/");
    });
  };

  return (
    <NuevoIphoneContainer>
      <NIForm>
        <NPContainer>
          <div>
            <label for="nombre">Nombre</label>
            <NIInput
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Cargador"
              required
              onChange={handleInputChange}
              value={input.nombre}
            />
          </div>
          <div>
            <label for="precio">Precio (U$D)</label>
            <NIInput
              type="number"
              id="price"
              name="price"
              placeholder="500"
              required
              onChange={handleInputChange}
              value={input.price}
            />
          </div>
        </NPContainer>
        <InputContainer>
          <label for="file_input">Imagenes</label>
          <NIInput
            id="file_input"
            type="file"
            multiple
            onChange={(e) => {
              subirImagenesCloudinary(e);
            }}
            name="image"
          />
        </InputContainer>
        <InputContainer>
          <label for="descripcion">Descripción</label>
          <NIInput
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Descripcion del producto"
            onChange={handleInputChange}
            value={input.descripcion}
          />
        </InputContainer>
        <InputContainer>
          <label for="Categoria">Categoria</label>

          <NIInputselect
            id="categoria"
            name="categoria"
            onChange={handleInputChange}
            value={input.categoria}
          >
            <option value="cargadores">Cargadores</option>
            <option value="auriculares">Auriculares</option>
          </NIInputselect>
        </InputContainer>

        <PrimaryButton
          type="submit"
          full={true}
          onClick={(e) => {
            crearAccesorios(e);
          }}
        >
          Crear Accesorio
        </PrimaryButton>
      </NIForm>
      <InputContainer>
        <IphoneCard
          name={input.nombre}
          price={input.price}
          images={muestra}
          key={1}
          admin={false}
        />
      </InputContainer>
    </NuevoIphoneContainer>
  );
}

export default NuevoAccesorioForm;
