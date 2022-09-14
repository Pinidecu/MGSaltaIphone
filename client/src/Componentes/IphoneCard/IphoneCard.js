import { ICContainer } from "./styled";
import ICCarrousel from "./ICCarrousel/ICCarrousel";
import ICInfo from "./ICInfo/ICInfo";

export default function IphoneCard(props) {
  
  return (
    <ICContainer>
      <ICCarrousel images={props.images} id={props.id} />
      <ICInfo iphone={props}/>
    </ICContainer>
  );
}
