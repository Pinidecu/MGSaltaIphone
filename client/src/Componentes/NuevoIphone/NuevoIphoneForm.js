import { useEffect, useState } from "react";
import IphoneCard from "../IphoneCard/IphoneCard";
import iphoneGenerico from "../../Imagenes/iphoneGenerico.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getColors, getIphones } from "../../store/Actions";

function NuevoIphoneForm({ getColors, colores }) {
  const push = useNavigate();
  //const colores = useSelector((state) => state.colores);

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
    imagen: ["iphoneGenerico.webp"],
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
    "http://res.cloudinary.com/ezequieldecu26/image/upload/v1658495541/wpuvsfuabpmpu3tpjjxe.webp",
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

  const subirImagenes = async function (e) {
    let formdata = new FormData();
    let pathImgs = [];
    for (let index = 0; index < e.target.files.length; index++) {
      let filename = Date.now() + "-" + e.target.files[index].name;
      formdata.append("images", e.target.files[index], filename);
      pathImgs.push(filename);
    }
    setInput({
      ...input,
      imagen: pathImgs,
    });
    console.log(input);
    axios
      .post(`http://localhost:3001/productos/loadFile`, formdata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
    if (e.target.name === "image") {
      setInput({
        ...input,
        [e.target.name]: urlsArray,
      });
      setTimeout(() => {
        setMuestra(urlsArray);
      }, 1000);
    } else {
      setInput({
        ...input,
        imageForColor: { ...input.imageForColor, [e.target.name]: urlsArray },
      });
    }
  };

  const subirImagenesColor = async function (e) {
    console.log(e.target.name);
    /* let formdata = new FormData();
    let pathImgs = [];
    for (let index = 0; index < e.target.files.length; index++) {
      let filename = Date.now() + "-" + e.target.files[index].name;
      formdata.append("images", e.target.files[index], filename);
      pathImgs.push(filename);
    }
    setInput({
      ...input,
      imageForColor: { ...input.imageForColor, [e.target.name]: pathImgs },
    });
    axios
      .post(`http://localhost:3001/productos/loadFile`, formdata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }); */
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
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
      {/* 
      <button
        className={`border-2 border-gray-300 ml-1 bg-[${d.hexa}] rounded-full w-4 h-4 focus:outline-none`}
      ></button> */}
    </div>
  ));

  return (
    <form className="flex   my-10 place-self-center justify-center w-[80%]">
      <form className="flex flex-col m-10 w-[50%] ">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              for="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="iPhone 13"
              required
              onChange={handleInputChange}
              value={input.nombre}
            />
          </div>
          <div>
            <label
              for="precio"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Precio (U$D)
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1500"
              required
              onChange={handleInputChange}
              value={input.price}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="file_input"
          >
            Imagenes
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="file_input"
            type="file"
            multiple
            onChange={(e) => {
              subirImagenesCloudinary(e);
            }}
            name="image"
          />
        </div>
        <div className="mb-6">
          <label
            for="descripción"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Descripción
          </label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Descripción del producto"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
            value={input.descripcion}
          />
        </div>
        <div className="mb-6">
          <label
            for="caracteristicas"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Caracteristicas
          </label>
          <input
            type="text"
            id="caracteristicas"
            name="caracteristicas"
            placeholder="Caracteristicas del producto"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleInputChange}
            value={input.caracteristicas}
          />
        </div>
        <div className="mb-6">
          <label
            for="descripción"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Colores
          </label>
          <div class="grid grid-cols-4 justify-center">{colorsTags}</div>
          <button
            className="my-1 flex text-blue-700 mx-auto "
            onClick={() => {
              setColor({ ...color, visible: !color.visible });
            }}
          >
            Agregar color
          </button>
          <div
            className={`bg-[#D3D6E7] rounded-md p-2 ${
              color.visible ? null : "hidden"
            }`}
          >
            <div className="mt-1">
              <label
                for="color"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rojo"
                required
                onChange={handleColorChange}
                value={color.color}
              />
            </div>
            <div className="mt-1">
              <label
                for="hexa"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Codigo hexadecimal
              </label>
              <input
                type="text"
                id="hexa"
                name="hexa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="#000000"
                required
                onChange={handleColorChange}
                value={color.hexa}
              />
            </div>

            <button
              type="submit"
              className="flex mx-auto mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                crearColor(e);
              }}
            >
              Crear color
            </button>
          </div>
        </div>
        {input.colores
          ? input.colores.map((color) => {
              return (
                <div className="mb-6">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    for="file_input"
                  >
                    Imagenes iPhone {color}
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="file_input"
                    type="file"
                    multiple
                    onChange={(e) => {
                      subirImagenesCloudinary(e);
                    }}
                    name={color}
                  />
                </div>
              );
            })
          : null}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            crearIphone(e);
          }}
        >
          Crear iPhone
        </button>
      </form>
      <div className="m-10">
        <IphoneCard
          name={input.nombre}
          price={input.price}
          images={muestra}
          key={1}
          admin={false}
        />
      </div>
    </form>
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
