import IphoneCard from "../IphoneCard/IphoneCard";
import { NSContainer, ProductsContainer, Title } from "./styled";


export default function Accesorios(props) {
  return (
    <NSContainer>
      <Title>Accesorios</Title>
      <ProductsContainer>
        {props.accesorios.map((iphone) => {
          return (
            <IphoneCard
              name={iphone.name}
              price={iphone.price}
              images={iphone.image}
              id={iphone.id}
              key={iphone.id}
              colors={iphone.colors}
              admin={props.admin}
            />
          );
        })}
      </ProductsContainer>
    </NSContainer>
  );
}
