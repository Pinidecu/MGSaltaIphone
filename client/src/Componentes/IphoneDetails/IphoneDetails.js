import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetalle,
  getColors,
  getDetalle,
  getDolar,
} from "../../store/Actions";
import { IDContainer } from "./styled";
import IDCaracteristicas from "./IDCaracteristicas/IDCaracteristicas";
import IDCard from "./IDCard/IDCard";
import Features from "./Features/Features";
import axios from "axios";

export default function IphoneDetails(props) {
  const { id } = props;
  const detalle = useSelector((state) => state.detalle);
  const colores = useSelector((state) => state.colores);
  const editIphoneAddColorVisible = useSelector(
    (state) => state.editIphoneAddColor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetalle(id));
    dispatch(getColors());
    return () => {
      dispatch(clearDetalle());
    };
  }, [dispatch]);

  function getDolarFunction() {
    getDolar();
  }
  useEffect(() => {
    getDolarFunction();
  }, []);

  useEffect(() => {
    getDolarFunction();
    dispatch(getDetalle(id));
  }, [editIphoneAddColorVisible]);

  let [more, setMore] = useState(false);

  const [input, setInput] = useState({
    name: detalle.name,
    price: "",
    imagen: ["iphoneGenerico.webp"],
    image: null,
    colores: [],
    imageForColor: {},
    description: "",
    features: "",
  });

  const [editInput, setEditInput] = useState({
    name: false,
    price: false,
    imagen: false,
    image: false,
    colores: false,
    imageForColor: false,
    description: false,
    features: false,
  });

  const [image, setImage] = useState({
    borrar: [],
    nuevas: [],
  });

  let productColors;
  if (detalle.imageForColor) {
    productColors = Object.keys(detalle.imageForColor);
  }

  const [color, setColor] = useState();

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

    setImage({
      ...image,
      nuevas: urlsArray,
    });
  };

  const edit = function (e, parametro) {
    console.log(input.name, id, parametro);
    console.log("parametro:", parametro);
    let obj = { [parametro]: input[parametro] };
    console.log(obj);
    axios
      .put(`http://localhost:3001/productos/${id}`, obj)
      .then((response) => {
        console.log(response);
        dispatch(getDetalle(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarColor = function (color) {
    console.log(color);
    let newColors = detalle.colors.filter((c) => c.name !== color);
    let colores = [];
    newColors.forEach((c) => {
      colores.push(c.name);
    });
    console.log("Viejo: ", detalle.colors);
    console.log("Nuevo: ", colores);
    console.log("Viejo: ", detalle.imageForColor);
    let newImageForColors = detalle.imageForColor;
    delete newImageForColors[color];
    console.log("Viejo: ", detalle.imageForColor);
    console.log("Nuevo: ", newImageForColors);
    let obj = { colores: colores, imageForColor: newImageForColors };
    axios
      .put(`http://localhost:3001/productos/colores/${id}`, obj)
      .then((response) => {
        console.log(response);
        dispatch(getDetalle(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarImagen = function (imagen) {
    let array = image.borrar;
    console.log(array);
    array.push(imagen);
    console.log(array);
    setImage({ ...image, borrar: array });
    console.log(image);
  };

  const cancelarBorrado = function (imagen) {
    let array = image.borrar;
    console.log(array);
    console.log(imagen);
    array = array.filter((i) => i !== imagen);
    setImage({ ...image, borrar: array });
  };

  const guardarcambios = function (e) {
    setEditInput({ ...editInput, image: false });
    let newImage = detalle.image.concat(image.nuevas);
    image.borrar.forEach((imagen) => {
      newImage = newImage.filter((i) => i !== imagen);
    });
    console.log(newImage);
    let obj = { image: newImage };
    axios
      .put(`http://localhost:3001/productos/${id}`, obj)
      .then((response) => {
        console.log(response);
        dispatch(getDetalle(id));
        setImage({ borrar: [], nuevas: [] });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let functions = {
    more,
    setMore,
    input,
    setInput,
    edit,
    editInput,
    handleInputChange,
    setEditInput,
    borrarColor,
    borrarImagen,
    cancelarBorrado,
    guardarcambios,
  };
  return (
    <IDContainer>
      <IDCard detalle={detalle} functions={functions} admin={props.admin} />
      {detalle.features ? (
        <Features detalle={detalle} functions={functions} admin={props.admin} />
      ) : null}
    </IDContainer>
  );
}
