import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetalle,
  getColors,
  getDetalle,
  getDetalleUsado,
  getDolar,
} from "../../store/Actions";
import { IDContainer } from "./styled";
import IDCard from "./IDCard/IDCard";
import Features from "./Features/Features";
import axios from "axios";

export default function IphoneDetails(props) {
  const { id } = props;
  const detalle = useSelector((state) => state.detalle);
  const editIphoneAddColorVisible = useSelector(
    (state) => state.editIphoneAddColor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    props.usado ? dispatch(getDetalleUsado(id)) : dispatch(getDetalle(id));
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
    props.usado ? dispatch(getDetalleUsado(id)) : dispatch(getDetalle(id));
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
    obs: "",
    color: "",
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
    obs: false,
    color: false,
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

  const handleInputChange = function (e) {
    if (e.target.name === "colores") {
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
  };

  const urlBack = props.usado
    ? "http://localhost:3001/usados/"
    : "http://localhost:3001/productos/";

  const edit = function (e, parametro) {
    let obj = { [parametro]: input[parametro] };
    axios
      .put(`${urlBack}${id}`, obj)
      .then((response) => {
        console.log(response);
        props.usado ? dispatch(getDetalleUsado(id)) : dispatch(getDetalle(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarColor = function (color) {
    let newColors = detalle.colors.filter((c) => c.name !== color);
    let colores = [];
    newColors.forEach((c) => {
      colores.push(c.name);
    });
    let newImageForColors = detalle.imageForColor;
    delete newImageForColors[color];
    let obj = { colores: colores, imageForColor: newImageForColors };
    axios
      .put(`${urlBack}colores/${id}`, obj)
      .then((response) => {
        console.log(response);
        props.usado ? dispatch(getDetalleUsado(id)) : dispatch(getDetalle(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarImagen = function (imagen) {
    let array = image.borrar;
    array.push(imagen);
    setImage({ ...image, borrar: array });
  };

  const cancelarBorrado = function (imagen) {
    let array = image.borrar;
    array = array.filter((i) => i !== imagen);
    setImage({ ...image, borrar: array });
  };

  const guardarcambios = function (e) {
    setEditInput({ ...editInput, image: false });
    let newImage = detalle.image
      ? detalle.image.concat(image.nuevas)
      : image.nuevas;
    image.borrar.forEach((imagen) => {
      newImage = newImage.filter((i) => i !== imagen);
    });
    let obj = { image: newImage };
    axios
      .put(`${urlBack}${id}`, obj)
      .then((response) => {
        console.log(response);
        props.usado ? dispatch(getDetalleUsado(id)) : dispatch(getDetalle(id));
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
    image,
    setImage,
  };

  return (
    <IDContainer>
      <IDCard
        detalle={detalle}
        functions={functions}
        admin={props.admin}
        usado={props.usado}
      />
      {detalle.features ? (
        <Features detalle={detalle} functions={functions} admin={props.admin} />
      ) : null}
    </IDContainer>
  );
}
