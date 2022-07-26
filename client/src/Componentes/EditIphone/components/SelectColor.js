import React, {  useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch, useSelector } from "react-redux";
import {
  editIphoneAddColor,
  editIphoneCreateColor,
} from "../../../store/Actions";
import axios from "axios";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function SelectColor(props) {
  const dispatch = useDispatch();

  const colores = useSelector((state) => state.colores);

  const [input, setInput] = useState({
    coloresSeleccionados: [],
    imageForColor: {},
  });
  const getColors = function () {
    let array = [];
    if (props.detalle.colors) {
      props.detalle.colors.forEach((c) => {
        array.push(c.name);
      });
    }
    return array;
  };
  const [colorsArray, setColorsArray] = useState(getColors());

  const handleColorChange = function (e) {
    var array = input.coloresSeleccionados;
    if (e.target.checked) {
      array.push(e.target.value);
    } else {
      array = array.filter((d) => d !== e.target.value);
    }
    setInput({
      ...input,
      coloresSeleccionados: array,
    });
    console.log(input.coloresSeleccionados);
  };

  const addColor = function (e) {
    e.preventDefault();
    console.log(props.id);
    console.log(props.detalle);
    console.log(colorsArray);
    let array = getColors().concat(input.coloresSeleccionados);
    console.log(array);
    let result = array.filter((item, index) => {
      return array.indexOf(item) === index;
    });
    console.log(result);
    let obj = {
      colores: result,
      imageForColor: { ...props.detalle.imageForColor, ...input.imageForColor },
    };
    console.log(obj);
    axios
      .put(`http://localhost:3001/productos/agregarcolores/${props.id}`, obj)
      .then((response) => {
        console.log(response);
        alert("Color cargado exitosamente");
      });
    console.log("se agrego el color: ", input.coloresSeleccionados);
    setInput({
      ...input,
      coloresSeleccionados: [],
      imageForColor: {},
    });
    dispatch(editIphoneAddColor(false));
  };

  const colorsTags = colores.map((d) => (
    <div
      className={`form-check ${getColors().includes(d.name) ? "hidden" : null}`}
    >
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        id={d.name}
        key={d.id}
        name="color"
        value={d.name}
        onChange={handleColorChange}
      />
      <label
        className="form-check-label inline-block text-gray-800"
        for={d.name}
      >
        {d.name}
      </label>
    </div>
  ));

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
      imageForColor: { ...input.imageForColor, [e.target.name]: urlsArray },
    });
  };

  return (
    <div className="absolute bg-[#D3D6E7] opacity-100 z-50 rounded-md p-5">
      <button
        className="absolute top-0 right-0 mr-2 mt-1"
        onClick={() => {
          dispatch(editIphoneAddColor(false));
        }}
      >
        <CloseCircleOutlined style={{ fontSize: "20px", color: "black" }} />
      </button>
      <div className="">
        <label
          for="descripción"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Colores
        </label>
        <div class="grid grid-cols-4 justify-center">{colorsTags}</div>
        <button
          className="my-1 flex text-blue-700 mx-auto text-sm "
          onClick={() => {
            dispatch(editIphoneCreateColor(true));
          }}
        >
          Nuevo color
        </button>
        {input.coloresSeleccionados
          ? input.coloresSeleccionados.map((color) => {
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
          className="flex mx-auto mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            addColor(e);
          }}
        >
          Agregar color
        </button>
      </div>
    </div>
  );
}
