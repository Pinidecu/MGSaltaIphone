import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editIphoneAddColor,
  editIphoneCreateColor,
  getColors,
} from "../../../../store/Actions";
import axios from "axios";
import { CloseCircleOutlined } from "@ant-design/icons";
import {
  ButtonClose,
  ColorInput,
  CreateColorContainer,
  InputContainer,
} from "./styled";
import { PrimaryButton } from "../../../styledComponents";

export default function CreateColor(props) {
  const dispatch = useDispatch();

  const [addColor, setAddColor] = useState({
    color: "",
    hexa: "",
    visible: false,
  });
  const handleColorChange = function (e) {
    setAddColor({
      ...addColor,
      [e.target.name]: e.target.value,
    });
  };

  const crearColor = function (e) {
    e.preventDefault();
    let obj = {
      name: addColor.color,
      hexa: addColor.hexa,
    };
    axios.post(`http://localhost:3001/colores`, obj).then((response) => {
      console.log(response);
      alert("Color cargado exitosamente");
      dispatch(getColors());
    });
    setAddColor({ color: "", hexa: "", visible: !addColor.visible });
    dispatch(editIphoneCreateColor(false));
  };
  return (
    <CreateColorContainer>
      <ButtonClose
        onClick={() => {
          dispatch(editIphoneAddColor(false));
          dispatch(editIphoneCreateColor(false));
        }}
      >
        <CloseCircleOutlined style={{ color: "black" }} />
      </ButtonClose>
      <InputContainer>
        <label for="color">Color</label>
        <ColorInput
          type="text"
          id="color"
          name="color"
          placeholder="Rojo"
          required
          onChange={handleColorChange}
          value={addColor.color}
        />
      </InputContainer>
      <InputContainer>
        <label for="hexa">Codigo hexadecimal</label>
        <ColorInput
          type="text"
          id="hexa"
          name="hexa"
          placeholder="#000000"
          required
          onChange={handleColorChange}
          value={addColor.hexa}
        />
      </InputContainer>

      <PrimaryButton
        type="submit"
        onClick={(e) => {
          crearColor(e);
        }}
      >
        Crear color
      </PrimaryButton>
    </CreateColorContainer>
  );
}
