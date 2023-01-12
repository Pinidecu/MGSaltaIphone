import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getIphones, getIphonesUsados } from "../../../store/Actions";
import { ICButton, ICInfoContainer } from "./styled";
import IphoneColors from "./IphoneColors/IphoneColors";
import IphonePrice from "./IphonePrice/IphonePrice";

export default function ICInfo({ iphone, tipo }) {
  const push = useNavigate();
  const dispatch = useDispatch();

  const urlEliminar =
    tipo === "usado"
      ? "http://localhost:3001/usados/"
      : "http://localhost:3001/productos/";

  const eliminarIphone = function (e, id) {
    e.preventDefault();
    axios.delete(`${urlEliminar}${id}`).then((response) => {
      console.log(response);
      alert("Iphone borrado");
      tipo === "usado" ? dispatch(getIphonesUsados()) : dispatch(getIphones());

      dispatch(getIphones());
      push("/");
    });
  };

  var urlDetail =
    iphone.tipo === "nuevo"
      ? `/producto/${iphone.id}`
      : `/producto-usado/${iphone.id}`;
  var urlEditPrueba =
    iphone.tipo === "nuevo"
      ? `/editarproducto/${iphone.id}`
      : `/editarproducto-usado/${iphone.id}`;
  var urlEdit =
    iphone.tipo === "nuevo"
      ? `/producto-admin/${iphone.id}`
      : `/producto-admin-usado/${iphone.id}`;

  return (
    <ICInfoContainer>
      <h1>{iphone.name}</h1>
      <h4>Entrega inmediata</h4>
      <IphoneColors colors={iphone.colors} />
      <IphonePrice price={iphone.price} />
      <ICButton color="white">
        {iphone.admin ? (
          <Link to={urlEdit}>
            <p>Editar</p>
          </Link>
        ) : (
          <Link to={urlDetail}>
            <p>Información</p>
          </Link>
        )}
      </ICButton>
      <ICButton color="black">
        {iphone.admin ? (
          <button
            onClick={(e) => {
              eliminarIphone(e, iphone.id);
            }}
          >
            <p>Eliminar</p>
          </button>
        ) : (
          <a
            href={`https://wa.me/+5493875090398?text=Hola!%20Queria%20consultarte%20por%20el%20${iphone.name}`}
            target="blank"
          >
            <p>Comprar</p>
          </a>
        )}
      </ICButton>
    </ICInfoContainer>
  );
}
