import iphoneAzul from "../../Imagenes/iphoneAzul1.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import iphoneRojo from "../../Imagenes/iphoneRojo.png";
import iphoneVerde from "../../Imagenes/iphoneVerde.png";
import axios from "axios";
import { getIphones } from "../../store/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "cloudinary-react";

export default function IphoneCard(props) {
  const push = useNavigate();
  const dolarBlue = useSelector((state) => state.dolarBlue);
  const dispatch = useDispatch();

  const [moneda, setMoneda] = useState("dolar");
  const cambiarMoneda = function (moneda, e) {
    e.preventDefault();
    setMoneda(moneda);
  };

  const eliminarIphone = function (e, id) {
    e.preventDefault();
    axios.delete(`http://localhost:3001/productos/${id}`).then((response) => {
      console.log(response);
      alert("Iphone borrado");
      dispatch(getIphones());
      push("/");
    });
  };

  var urlDetail = `/producto/${props.id}`;
  var urlEdit = `/editarproducto/${props.id}`;
  return (
    <div className="flex items-center justify-center  font-sans  m-2  bg-white rounded-lg shadow-2xl overflow-hidden  ">
      <div className="flex items-center justify-center  max-w-[15em] max-h-[15em]  h-full bg-white  ">
        <Carousel infiniteLoop showThumbs={false}>
          {props.images
            ? props.images.map((image) => {
                return (
                  <div className="h-[100%] " key={props.id}>
                    <Image
                      cloudName="ezequieldecu26"
                      publicId={image}
                      className=" h-[100%] w-[100%]  object-contain object-center"
                    />
                  </div>
                );
              })
            : null}
        </Carousel>
      </div>
      <form className="flex-auto w-56 p-2 self-center  ">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg text-center font-semibold text-slate-900">
            {props.name}
          </h1>
          <div className="w-full flex-none text-sm text-center font-medium text-slate-700 mt-2">
            Entrega inmediata
          </div>
          <div className="flex items-center justify-center w-full mt-2">
            {props.colors
              ? props.colors.map((color) => {
                  return (
                    <button
                      key={color.id}
                      className={`border-2 border-gray-300 ml-1  ${
                        color.hexa ? `bg-[${color.hexa}]` : "bg-black"
                      } rounded-full w-4 h-4 focus:outline-none`}
                    ></button>
                  );
                })
              : null}
          </div>
        </div>
        <div className="flex flex-col  items-center  py-2 border-b border-slate-200 ">
          <div>
            <button
              className="m-1 p-1 text-xs font-bold bg-slate-200 border-2 border-gray-300"
              onClick={(e) => {
                cambiarMoneda("dolar", e);
              }}
            >
              U$D
            </button>
            <button
              className="m-1 p-1 text-xs font-bold bg-slate-200 border-2 border-gray-300"
              onClick={(e) => {
                cambiarMoneda("pesos", e);
              }}
            >
              $
            </button>
          </div>
          <div className="w-full h-9 rounded-lg flex items-center justify-center text-slate-700 text-xl font-semibold bg-slate-300 text-white">
            {moneda === "dolar"
              ? `${props.price} U$D`
              : `$ ${new Intl.NumberFormat().format(props.price * dolarBlue)}`}
          </div>
          {/* <div className="w-full h-9 mt-2 rounded-lg flex items-center justify-center text-slate-700 text-xl font-semibold bg-slate-300 text-white">
            $ {new Intl.NumberFormat().format(props.price * dolarBlue)}
          </div> */}
          <div
            className={`${
              moneda === "dolar" ? "invisible" : null
            } w-full flex items-center justify-center text-slate-700 font-semibold`}
          >
            <p className="text-[10px]">Sujeto a la variacion del dolar blue</p>
          </div>
        </div>
        <div className="flex-auto my-1 flex w-full space-x-4 justify-center">
          {props.admin ? (
            <Link
              className="flex  w-full justify-center h-10 px-3 font-semibol items-center rounded-md border border-slate-200 text-slate-900 hover:border-black hover:bg-white"
              to={urlEdit}
            >
              <p>Editar</p>
            </Link>
          ) : (
            <Link
              className="flex  w-full justify-center h-10 px-3 font-semibol items-center rounded-md border border-slate-200 text-slate-900 hover:border-black hover:bg-white"
              to={urlDetail}
            >
              <p>Información</p>
            </Link>
          )}
        </div>
        <div className="flex-auto my-1 w-full flex w-full space-x-4 justify-center">
          {props.admin ? (
            <button
              className="flex w-full justify-center h-10 px-3 font-semibold  items-center rounded-md bg-black text-white  hover:bg-gray-700"
              onClick={(e) => {
                eliminarIphone(e, props.id);
              }}
            >
              <p>Eliminar</p>
            </button>
          ) : (
            <a
              className="flex w-full justify-center h-10 px-3 font-semibold  items-center rounded-md bg-black text-white hover:bg-gray-700"
              href="https://wa.me/+5493875090398?text=Hola!%20Queria%20consultarte%20por%20el%20Iphone%2013%20PRO%20MAX"
              target="blank"
            >
              <p>Comprar</p>
            </a>
          )}
        </div>
      </form>
    </div>
  );
}
