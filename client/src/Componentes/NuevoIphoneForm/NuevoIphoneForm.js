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

function NuevoIphoneForm({ getColors, colores }) {
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
    colores: [],
    imageForColor: {},
    descripcion: "",
    caracteristicas: "",
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
    if (e.target.name === "colores") {
      console.log("Colores", input.colores);
      var array = input.colores;
      if (e.target.checked) {
        array.push(e.target.value);
      } else {
        array = array.filter((d) => d !== e.target.value);
      }
      setInput({
        ...input,
        colores: array,
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
    if (e.target.name === "image") {
      setInput({
        ...input,
        [e.target.name]: urlsArray,
      });
    } else {
      setInput({
        ...input,
        imageForColor: { ...input.imageForColor, [e.target.name]: urlsArray },
      });
    }
  };

  const crearIphone = async function (e) {
    e.preventDefault();

    let obj = {
      name: input.nombre,
      price: input.price,
      image: input.image,
      description: input.descripcion,
      features: input.caracteristicas,
      colorsNames: input.colores,
      imageForColor: input.imageForColor,
    };
    console.log("obj: ", obj);
    axios.post(`http://localhost:3001/productos`, obj).then((response) => {
      console.log(response);
      alert("Iphone cargado exitosamente");
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
    <div class="form-check">
      <input
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm   checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        id={d.name}
        key={d.id}
        name="colores"
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
          <label for="descripción">Descripción</label>
          <NIInput
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Descripción del producto"
            onChange={handleInputChange}
            value={input.descripcion}
          />
        </InputContainer>
        <InputContainer>
          <label for="caracteristicas">Caracteristicas</label>
          <NIInput
            type="text"
            id="caracteristicas"
            name="caracteristicas"
            placeholder="Caracteristicas del producto"
            onChange={handleInputChange}
            value={input.caracteristicas}
          />
        </InputContainer>
        <InputContainer>
          <label for="colores">Colores</label>
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
        {input.colores
          ? input.colores.map((color) => {
              return (
                <InputContainer>
                  <label for="file_input">Imagenes iPhone {color}</label>
                  <NIInput
                    id="file_input"
                    type="file"
                    multiple
                    onChange={(e) => {
                      subirImagenesCloudinary(e);
                    }}
                    name={color}
                  />
                </InputContainer>
              );
            })
          : null}

        <PrimaryButton
          type="submit"
          full={true}
          onClick={(e) => {
            crearIphone(e);
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
export default connect(mapStateToProps, mapDispatchToProps)(NuevoIphoneForm);
