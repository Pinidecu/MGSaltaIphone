import IphoneCard from "../IphoneCard/IphoneCard";
import { NSContainer, ProductsContainer, Title } from "./styled";


export default function NuevosSellados(props) {
  return (
    <NSContainer>
      <Title>Nuevos sellados</Title>
      <ProductsContainer>
        {props.iphones.map((iphone) => {
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
