import axios from "axios";
import { getDetalle } from "../../store/Actions";

export const handleInputChange = function (e, input, setInput) {
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

export const subirImagenes = function (e, setImage, image) {
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

export const edit = function (e, parametro, input, id, dispatch) {
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

export const borrarColor = function (color, detalle, dispatch, id) {
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

export const borrarImagen = function (imagen, image, setImage) {
  let array = image.borrar;
  console.log(array);
  array.push(imagen);
  console.log(array);
  setImage({ ...image, borrar: array });
  console.log(image);
};

export const cancelarBorrado = function (imagen, image, setImage) {
  let array = image.borrar;
  console.log(array);
  console.log(imagen);
  array = array.filter((i) => i !== imagen);
  setImage({ ...image, borrar: array });
};

export const guardarcambios = function (
  e,
  dispatch,
  id,
  setImage,
  editInput,
  setEditInput,
  image,
  detalle
) {
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
