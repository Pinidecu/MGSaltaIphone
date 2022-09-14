import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, IPContainer, Nota, Price } from "./styled";

export default function IphonePrice({ price }) {
  const dolarBlue = useSelector((state) => state.dolarBlue);
  const [moneda, setMoneda] = useState("dolar");
  const cambiarMoneda = function (moneda, e) {
    e.preventDefault();
    setMoneda(moneda);
  };
  return (
    <IPContainer>
      <div>
        <Button
          onClick={(e) => {
            cambiarMoneda("dolar", e);
          }}
        >
          U$D
        </Button>
        <Button
          onClick={(e) => {
            cambiarMoneda("pesos", e);
          }}
        >
          $
        </Button>
      </div>
      <Price>
        {moneda === "dolar"
          ? `${price} U$D`
          : `$ ${new Intl.NumberFormat().format(price * dolarBlue)}`}
      </Price>
      <Nota moneda={moneda}>
        <p>Sujeto a la variacion del dolar blue</p>
      </Nota>
    </IPContainer>
  );
}
