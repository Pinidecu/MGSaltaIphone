import { useEffect, useState } from "react";
import IphoneCard from "../IphoneCard/IphoneCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getColors, getIphones } from "../../store/Actions";
import {
  NIForm,
  NIInput,
  NPContainer,
  NuevoIphoneContainer,
  InputContainer,
  ColorsContainer,
  ACButton,
  NewColorForm, 
} from "./styled";
import { PrimaryButton } from "../styledComponents";

function NuevoIphoneUsadoForm({ getColors, colores }) {
  const push = useNavigate();
  const dispatch = useDispatch();

  function getColorsFunction() {
    getColors();
  }

  useEffect(() => {
    getColorsFunction();
  }, []);

  const [input, setInput] = useState({
    nombre: "",
    price: "",
    image: null,
    color: [],
    observaciones: "",
    bateria: "",
  });
  const [color, setColor] = useState({
    color: "",
    hexa: "",
    visible: false,
  });

  const [muestra, setMuestra] = useState([
    "https://res.cloudinary.com/ezequieldecu26/image/upload/v1663258868/wvknszofv5krvxyjzr5w.webp",
  ]);

  const handleColorChange = function (e) {
    setColor({
      ...color,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = function (e) {
    if (e.target.name === "color") {
      console.log("Colores", input.color);
      var array = input.color;
      if (e.target.checked) {
        array.push(e.target.value);
      } else {
        array = array.filter((d) => d !== e.target.value);
      }
      setInput({
        ...input,
        color: array,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
    console.log(input);
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

  const crearIphoneUsado = async function (e) {
    e.preventDefault();

    let obj = {
      name: input.nombre,
      price: input.price,
      image: input.image,
      obs: input.observaciones,
      batery: input.bateria,
      colorsNames: input.color,
    };
    console.log("obj: ", obj);
    axios.post(`http://localhost:3001/usados`, obj).then((response) => {
      console.log(response);
      alert("Iphone usado cargado exitosamente");
      dispatch(getIphones());
      push("/");
    });
  };

  const crearColor = function (e) {
    e.preventDefault();
    let obj = {
      name: color.color,
      hexa: color.hexa,
    };
    axios.post(`http://localhost:3001/colores`, obj).then((response) => {
      console.log(response);
      alert("Color cargado exitosamente");
      dispatch(getColors());
    });
    setColor({ color: "", hexa: "", visible: !color.visible });
  };

  const colorsTags = colores.map((d) => (
    <div class="flex items-center mb-1 gap-2">
      <input
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"        
        type="radio"
        id={d.name}
        key={d.id}
        name="color"
        value={d.name}
        onChange={handleInputChange}
      />
      <label class="form-check-label inline-block text-gray-800" for={d.name}>
        {d.name}
      </label>
    </div>
  ));

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
              placeholder="iPhone 13"
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
              placeholder="1500"
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
          <label for="observaciones">Observaciones</label>
          <NIInput
            type="text"
            id="observaciones"
            name="observaciones"
            placeholder="Observaciones del producto"
            onChange={handleInputChange}
            value={input.observaciones}
          />
        </InputContainer>
        <InputContainer>
          <label for="bateria">Condición de Batería</label>
          <NIInput
            type="number" min="0" max="100"
            id="bateria"
            name="bateria"
            placeholder="% de batería"
            onChange={handleInputChange}
            value={input.bateria}
          />
        </InputContainer>
        <InputContainer>
          <label for="color">Color</label>
          <ColorsContainer>{colorsTags}</ColorsContainer>
          <ACButton
            onClick={() => {
              setColor({ ...color, visible: !color.visible });
            }}
          >
            Agregar color
          </ACButton>
          <NewColorForm visible={color.visible}>
            <InputContainer>
              <label for="color">Color</label>
              <NIInput
                type="text"
                id="color"
                name="color"
                placeholder="Rojo"
                required
                onChange={handleColorChange}
                value={color.color}
              />
            </InputContainer>
            <InputContainer>
              <label for="hexa">Codigo hexadecimal</label>
              <NIInput
                type="text"
                id="hexa"
                name="hexa"
                placeholder="#000000"
                required
                onChange={handleColorChange}
                value={color.hexa}
              />
            </InputContainer>
            <PrimaryButton
              type="submit"
              onClick={(e) => {
                crearColor(e);
              }}
            >
              Crear color
            </PrimaryButton>
          </NewColorForm>
        </InputContainer>
       
        <PrimaryButton
          type="submit"
          full={true}
          onClick={(e) => {
            crearIphoneUsado(e);
          }}
        >
          Crear iPhone
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

const mapStateToProps = (state) => {
  return {
    colores: state.colores,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getColors: (colores) => {
      dispatch(getColors(colores));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NuevoIphoneUsadoForm);
