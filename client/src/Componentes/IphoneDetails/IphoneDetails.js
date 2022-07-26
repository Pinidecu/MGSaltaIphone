import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import iphoneRojo from "../../Imagenes/iphoneRojo.png";
import iphoneAzul from "../../Imagenes/iphoneAzul.png";
import iphoneVerde from "../../Imagenes/iphoneVerde.png";
import i13promax1 from "../../Imagenes/13promax1.jpg";
import i13promax2 from "../../Imagenes/13promax2.jpg";
import i13promax3 from "../../Imagenes/13promax3.jpg";
import i13promax4 from "../../Imagenes/13promax4.jpg";
import Carrousel from "../Carrousel/Carrousel";
import { Image } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetalle,
  getColors,
  getDetalle,
  getDolar,
} from "../../store/Actions";
import {
  DownOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  UpOutlined,
} from "@ant-design/icons";

export default function IphoneDetails(props) {
  const { id } = props;
  const detalle = useSelector((state) => state.detalle);
  const dolarBlue = useSelector((state) => state.dolarBlue);
  const colores = useSelector((state) => state.colores);

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

  const iphone = {
    red: [iphoneRojo, iphoneRojo],
    blue: [iphoneAzul, iphoneAzul],
    green: [iphoneVerde, iphoneVerde],
  };
  let productColors;
  if (detalle.imageForColor) {
    productColors = Object.keys(detalle.imageForColor);
  }

  const [color, setColor] = useState();
  let [more, setMore] = useState(false);
  console.log(detalle);
  return (
    <section className="text-gray-700 body-font overflow-hidden   ">
      <div className="container px-5 pt-24 mx-auto flex flex-col justify-center  items-center">
        <div className="lg:w-4/5 mx-auto flex  justify-center">
          <div className="flex w-[500px] h-[500px] justify-center items-center bg-white border border-gray-200 rounded-md overflow-hidden">
            <Carousel infiniteLoop showThumbs={false}>
              {detalle.imageForColor && color && detalle.imageForColor[color]
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
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {detalle.name}
              </h1>
              <p className="text-white leading-relaxed mt-5 text-justify">
                {detalle.description}
              </p>
            </div>
            <div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="text-white mr-3">Color</span>
                  {productColors
                    ? productColors.map((color) => {
                        let colorObj = colores.filter(
                          (c) => c.name === color
                        )[0];
                        return (
                          <button
                            key={color}
                            className={`border-2 border-gray-300 ml-1   ${
                              colorObj ? `bg-[${colorObj.hexa}]` : "bg-black"
                            } rounded-full w-6 h-6 focus:outline-none`}
                            onClick={() => {
                              setColor(color);
                            }}
                          ></button>
                        );
                      })
                    : null}
                </div>
                <button className="flex ml-auto text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                  Caracteristicas
                </button>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white ">
                  USD {detalle.price}
                  {dolarBlue !== 0
                    ? `- $${new Intl.NumberFormat().format(
                        detalle.price * dolarBlue
                      )}`
                    : "cargando"}
                </span>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        {detalle.features ? (
          <div className="lg:w-4/5 my-10 px-12 flex flex-col justify-center items-center">
            <button
              className=" flex flex-row gap-2 text-white items-center"
              onClick={() => setMore(!more)}
            >
              <p className=" text-white">Ver Caracteristiscas</p>
              {more ? <CaretUpOutlined size={50} /> : <CaretDownOutlined />}
            </button>
            {more ? (
              <p className="text-white mt-5 text-justify">{detalle.features}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
