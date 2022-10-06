import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import {
  editIphoneAddColor,
  clearDetalle,
  getColors,
  getDetalle,
  getDolar,
} from "../../store/Actions";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import AddColor from "./components/AddColor";
import Features from "./components/Features/Features";
import { IDContainer } from "./styled";

export default function EditIphone(props) {
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
    dispatch(getDetalle(id));
  }, [editIphoneAddColorVisible]);

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

  const [color, setColor] = useState();
  let [more, setMore] = useState(false);
  return (
    <IDContainer>
      <div className="lg:w-4/5 mx-auto flex  justify-center">
        <div className="relative flex w-[500px] h-[500px] justify-center items-center bg-white border border-gray-200 rounded-md overflow-hidden">
          {editInput.image ? (
            <div
              className={`absolute top-0 w-full h-full overflow-clip z-10 flex items-center justify-center `}
            >
              <div className="absolute top-0 right-0 w-screen h-full bg-black opacity-90"></div>
              <div className="absolute -bottom-2 right-3.5  mr-0.5 flex  h-[50px] w-[50px] ">
                <button
                  className="border hover:bg-green-400 rounded p-1 m-1 flex items-center h-[2em] bg-green-300"
                  id="name"
                  onClick={(e) => {
                    guardarcambios(e);
                  }}
                >
                  <CheckOutlined style={{ fontSize: "15px", color: "white" }} />
                </button>
                <button
                  className="border hover:bg-red-400 rounded p-1 m-1  flex items-center h-[2em] bg-red-300"
                  onClick={() => {
                    setEditInput({ ...editInput, image: false });
                    setInput({ ...input, image: detalle.image });
                    setImage({ borrar: [], nuevas: [] });
                  }}
                >
                  <CloseOutlined style={{ fontSize: "15px", color: "white" }} />
                </button>
              </div>
              <div className="w-[80%] z-20">
                <div className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                  <p>Imagenes cargadas</p>
                  <div className=" flex flex-wrap my-2 self-center gap-2 items-center justify-center">
                    {detalle.image
                      ? detalle.image.map((i) => {
                          return (
                            <div
                              className="h-[100px] rounded-sm relative bg-white"
                              key={detalle.id}
                            >
                              <div
                                className={`${
                                  image.borrar.includes(i) ? null : "hidden"
                                } absolute top-0 right-0 w-full h-full bg-slate-500 opacity-90 flex items-center justify-center`}
                              >
                                <DeleteOutlined
                                  style={{ fontSize: "35px", color: "white" }}
                                />
                                <button
                                  className="absolute self-end hover:visible"
                                  onClick={() => cancelarBorrado(i)}
                                >
                                  <CloseOutlined
                                    style={{
                                      fontSize: "15px",
                                      color: "white",
                                    }}
                                  />
                                </button>
                              </div>
                              <button
                                className={`flex absolute top-1 right-1 bg-red-200 hover:bg-red-400  w-[1em] h-[1em] items-center justify-center rounded-full ${
                                  image.borrar.includes(i) ? "hidden" : null
                                }`}
                                onClick={() => borrarImagen(i)}
                              >
                                <p className="text-white text-xs text-center mb-1 font-bold">
                                  x
                                </p>
                              </button>
                              <Image
                                cloudName="ezequieldecu26"
                                publicId={i}
                                width="100px"
                                height="100px"
                                className=" h-full object-contain object-center"
                                alt="iphone"
                              />
                            </div>
                          );
                        })
                      : null}

                    {detalle?.image?.length === 0 ? (
                      <p className="text-xs text-slate-400">No hay imagenes</p>
                    ) : null}
                  </div>
                </div>
                <label
                  className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                  for="file_input"
                >
                  Agregar imagen
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="file_input"
                  type="file"
                  multiple
                  onChange={(e) => {
                    subirImagenes(e);
                  }}
                  name="image"
                />
              </div>
            </div>
          ) : (
            <div className="absolute bottom-0 right-0 flex flex-row justify-between items-center">
              <button
                className="border hover:bg-slate-400 rounded p-1 m-1"
                onClick={() => setEditInput({ ...editInput, image: true })}
              >
                <EditOutlined style={{ fontSize: "20px", color: "black" }} />
              </button>
            </div>
          )}
          <Carousel infiniteLoop showThumbs={false}>
            {detalle.imageForColor && color
              ? detalle.imageForColor[color].map((image) => {
                  return (
                    <div className="h-[358px]" key={detalle.id}>
                      <Image
                        cloudName="ezequieldecu26"
                        publicId={image}
                        width="100%"
                        height="400px"
                        className=" h-full object-contain object-center"
                        alt="iphone"
                      />
                    </div>
                  );
                })
              : detalle.image?.map((image) => {
                  return (
                    <div className="h-[358px]" key={detalle.id}>
                      <Image
                        cloudName="ezequieldecu26"
                        publicId={image}
                        width="100%"
                        height="400px"
                        className=" h-full  object-contain object-center "
                        alt="iphone"
                      />
                    </div>
                  );
                })}
          </Carousel>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 flex flex-col  ">
          <div>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              APPLE
            </h2>

            {editInput.name ? (
              <div className="flex flex-row items-center">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={input.name}
                  required
                  value={input.name}
                  onChange={handleInputChange}
                />
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1"
                  id="name"
                  onClick={(e) => {
                    setEditInput({ ...editInput, name: false });
                    edit(e, "name");
                  }}
                >
                  <CheckOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1"
                  onClick={() => {
                    setEditInput({ ...editInput, name: false });
                    setInput({ ...input, name: detalle.name });
                  }}
                >
                  <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
              </div>
            ) : (
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-white text-3xl title-font font-medium mb-1 ">
                  {detalle.name}
                </h1>
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1"
                  onClick={() => setEditInput({ ...editInput, name: true })}
                >
                  <EditOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
              </div>
            )}
            {editInput.description ? (
              <div className="flex flex-col items-center my-5">
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Descripción del producto"
                  className="block p-4 w-full h-[10em] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  value={input.description}
                  onChange={handleInputChange}
                />
                <div className="flex flex-row items-center self-end">
                  <button
                    className="border hover:bg-slate-400 rounded p-1 m-1"
                    id="description"
                    onClick={(e) => {
                      setEditInput({ ...editInput, description: false });
                      edit(e, "description");
                    }}
                  >
                    <CheckOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  </button>
                  <button
                    className="border hover:bg-slate-400 rounded p-1 m-1"
                    onClick={() => {
                      setEditInput({ ...editInput, description: false });
                      setInput({
                        ...input,
                        description: detalle.description,
                      });
                    }}
                  >
                    <CloseOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between  ">
                <p className="text-white leading-relaxed mt-5 text-justify">
                  {detalle.description}
                </p>
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1 self-end"
                  onClick={() =>
                    setEditInput({ ...editInput, description: true })
                  }
                >
                  <EditOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
              </div>
            )}
          </div>
          <div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="text-white mr-3">Color</span>
                <div className="flex gap-1">
                  {productColors
                    ? productColors.map((color) => {
                        let colorObj = colores.filter(
                          (c) => c.name === color
                        )[0];
                        return (
                          <div
                            key={color}
                            className={`border-2 border-gray-300 ml-1   ${
                              colorObj ? `bg-[${colorObj.hexa}]` : "bg-black"
                            } rounded-full w-6 h-6 focus:outline-none`}
                          >
                            <button
                              className="flex relative top-[-10px] right-[-12px] bg-red-200 hover:bg-red-400  w-[1em] h-[1em] items-center justify-center rounded-full"
                              onClick={() => borrarColor(color)}
                            >
                              <p className="text-white text-xs text-center mb-1 font-bold">
                                x
                              </p>
                            </button>
                          </div>
                        );
                      })
                    : null}
                  <button
                    className="mx-3 flex items-center"
                    onClick={() => {
                      dispatch(editIphoneAddColor(true));
                    }}
                  >
                    <PlusCircleOutlined
                      style={{ fontSize: "25px", color: "white" }}
                    />
                  </button>
                  <AddColor id={id} detalle={detalle} />
                </div>
              </div>
              <button className="flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                Caracteristicas
              </button>
            </div>
            {editInput.price ? (
              <div className="flex flex-row items-center">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={input.price}
                  required
                  value={input.price}
                  onChange={handleInputChange}
                />
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1"
                  id="name"
                  onClick={(e) => {
                    setEditInput({ ...editInput, price: false });
                    edit(e, "price");
                  }}
                >
                  <CheckOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1"
                  onClick={() => {
                    setEditInput({ ...editInput, price: false });
                    setInput({ ...input, price: detalle.price });
                  }}
                >
                  <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="title-font font-medium text-2xl text-white ">
                  USD {detalle.price}
                </span>
                <button
                  className="border hover:bg-slate-400 rounded p-1 m-1"
                  onClick={() => setEditInput({ ...editInput, price: true })}
                >
                  <EditOutlined style={{ fontSize: "20px", color: "white" }} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {detalle.features ? (
        <Features
          more={more}
          setMore={setMore}
          input={input}
          setInput={setInput}
          edit={edit}
          detalle={detalle}
          editInput={editInput}
          handleInputChange={handleInputChange}
          setEditInput={setEditInput}
          admin={props.admin}
        />
      ) : null}
    </IDContainer>
  );
}
