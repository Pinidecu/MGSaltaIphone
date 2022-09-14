import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getIphones } from "../../../store/Actions";
import { ICButton, ICInfoContainer } from "./styled";
import IphoneColors from "./IphoneColors/IphoneColors";
import IphonePrice from "./IphonePrice/IphonePrice";

export default function ICInfo({ iphone }) {
  const push = useNavigate();
  const dispatch = useDispatch();

  const eliminarIphone = function (e, id) {
    e.preventDefault();
    axios.delete(`http://localhost:3001/productos/${id}`).then((response) => {
      console.log(response);
      alert("Iphone borrado");
      dispatch(getIphones());
      push("/");
    });
  };

  var urlDetail = `/producto/${iphone.id}`;
  var urlEdit = `/editarproducto/${iphone.id}`;

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
