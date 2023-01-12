import { useState } from "react";
import { IDCardContainer } from "./styled";
import Images from "./Images/Images";
import Info from "./Info/Info";

export default function IDCard({ detalle, admin, functions, usado }) {
  const [color, setColor] = useState();
  return (
    <IDCardContainer>
      <Images
        detalle={detalle}
        color={color}
        admin={admin}
        functions={functions}
      />
      <Info
        setColor={setColor}
        detalle={detalle}
        admin={admin}
        functions={functions}
        usado={usado}
      />
    </IDCardContainer>
  );
}
