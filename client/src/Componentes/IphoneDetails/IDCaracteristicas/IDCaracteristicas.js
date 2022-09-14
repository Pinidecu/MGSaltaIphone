import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { ButtonDisplay, CaracteristicasContainer } from "./styled";

export default function IDCaracteristicas(props) {
  return (
    <CaracteristicasContainer>
      <ButtonDisplay onClick={() => props.setMore(!props.more)}>
        <p>Ver Caracteristiscas</p>
        {props.more ? <CaretUpOutlined size={50} /> : <CaretDownOutlined />}
      </ButtonDisplay>
      {props.more ? (
        <p>{props.features}</p>
      ) : null}
    </CaracteristicasContainer>
  );
}
