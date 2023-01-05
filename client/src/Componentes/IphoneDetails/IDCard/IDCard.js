import { useState } from "react";
import { IDCardContainer } from "./styled";
import Images from "./Images/Images";
import Info from "./Info/Info";

export default function IDCard({ detalle, admin, functions }) {
  const [color, setColor] = useState(); 
  return (
    <IDCardContainer>
      <Images detalle={detalle} color={color} />
      <Info
        setColor={setColor}
        detalle={detalle}
        admin={admin}
        functions={functions}
      />
    </IDCardContainer>
  );
}
