import { useSelector } from "react-redux";
import {
  Button,
  ColorButton,
  ColorContainer,
  InfoContainer,
  SupContainer,
} from "./styled";

export default function Info({ detalle, setColor }) {
  const dolarBlue = useSelector((state) => state.dolarBlue);
  const colores = useSelector((state) => state.colores);
  let productColors;
  if (detalle.imageForColor) {
    productColors = Object.keys(detalle.imageForColor);
  }

  return (
    <InfoContainer>
      <h2>APPLE</h2>
      <h1>{detalle.name}</h1>
      <p>{detalle.description}</p>
      <SupContainer>
        <ColorContainer>
          <span>Colores</span>
          {productColors
            ? productColors.map((color) => { 
                let colorObj = colores.filter((c) => c.name === color)[0];
                return (
                  <ColorButton
                    key={color}
                    color={colorObj.hexa}
                    onClick={() => {
                      setColor(color);
                    }}
                  ></ColorButton>
                );
              })
            : null}
        </ColorContainer>
        <Button>Caracteristicas</Button>
      </SupContainer>
      <ColorContainer>
        <span>
          USD {detalle.price}
          {dolarBlue !== 0
            ? `- $${new Intl.NumberFormat().format(detalle.price * dolarBlue)}`
            : "cargando"}
        </span>
        <Button color="secondary">Comprar</Button>
      </ColorContainer>
    </InfoContainer>
  );
}
