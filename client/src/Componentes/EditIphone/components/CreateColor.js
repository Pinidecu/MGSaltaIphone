import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch } from "react-redux";
import {
  editIphoneAddColor,
  editIphoneCreateColor,
  getColors,
} from "../../../store/Actions";
import axios from "axios";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function CreateColor(props) {
  const dispatch = useDispatch();

  const [addColor, setAddColor] = useState({
    color: "",
    hexa: "",
    visible: false,
  });
  const handleColorChange = function (e) {
    setAddColor({
      ...addColor,
      [e.target.name]: e.target.value,
    });
  };

  const crearColor = function (e) {
    e.preventDefault();
    let obj = {
      name: addColor.color,
      hexa: addColor.hexa,
    };
    axios.post(`http://localhost:3001/colores`, obj).then((response) => {
      console.log(response);
      alert("Color cargado exitosamente");
      dispatch(getColors());
    });
    setAddColor({ color: "", hexa: "", visible: !addColor.visible });
    dispatch(editIphoneCreateColor(false));
  };
  return (
    <div className="absolute bg-[#D3D6E7] opacity-100 z-50 rounded-md p-5">
      <button
        className="absolute top-0 right-0 mr-2 mt-1"
        onClick={() => {
          dispatch(editIphoneAddColor(false));
          dispatch(editIphoneCreateColor(false));
        }}
      >
        <CloseCircleOutlined style={{ fontSize: "20px", color: "black" }} />
      </button>
      <div className="mt-1">
        <label
          for="color"
          className="block  text-sm font-medium text-gray-900 dark:text-gray-300 mb-1"
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
          value={addColor.color}
        />
      </div>
      <div className="mt-1">
        <label
          for="hexa"
          className="block  text-sm font-medium text-gray-900 dark:text-gray-300 mb-1"
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
          value={addColor.hexa}
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
  );
}
