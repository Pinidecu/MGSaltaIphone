import { useState } from "react";
import { IDCardContainer } from "./styled";
import Images from "./Images/Images";
import Info from "./Info/Info";

export default function IDCard({ detalle }) {
  const [color, setColor] = useState();
  return (
    <IDCardContainer>
      <Images detalle={detalle} color={color} />
      <Info setColor={setColor} detalle={detalle} />
    </IDCardContainer>
  );
}
