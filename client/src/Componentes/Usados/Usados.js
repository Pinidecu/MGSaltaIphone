import IphoneCard from "../IphoneCard/IphoneCard";
import { NSContainer, ProductsContainer, Title } from "./styled";


export default function Usados(props) {
  return (
    <NSContainer>
      <Title>Usados</Title>
      <ProductsContainer>
        {props.iphonesUsados.map((iphone) => {
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
