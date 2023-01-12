import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { editIphoneAddColor } from "../../../../store/Actions";
import ConfirmEdit from "../../ConfirmEdit/ConfirmEdit";
import EditButton from "../../EditButton/EditButton";
import { EditButtonContainer } from "../../EditButton/styled";
import AddColor from "../../EditColors/AddColor/AddColor";
import ColorUsado from "./ColorUsado/ColorUsado";
import Description from "./Description/Description";
import Name from "./Name/Name";
import Obs from "./Obs/Obs";
import {
  AddButton,
  BorrarButton,
  Button,
  ColorButton,
  ColorContainer,
  InfoContainer,
  PriceInput,
  SupContainer,
} from "./styled";

export default function Info({ detalle, setColor, admin, functions, usado }) {
  const colores = useSelector((state) => state.colores);
  let productColors;
  if (detalle.imageForColor) {
    productColors = Object.keys(detalle.imageForColor);
  }
  const dispatch = useDispatch();
  console.log("detalle", detalle);
  return (
    <InfoContainer>
      <Name detalle={detalle} admin={admin} functions={functions} />
      {usado ? (
        <Obs detalle={detalle} admin={admin} functions={functions} />
      ) : (
        <Description detalle={detalle} admin={admin} functions={functions} />
      )}
      <SupContainer>
        {usado ? (
          <ColorUsado detalle={detalle} admin={admin} functions={functions} />
        ) : (
          <ColorContainer>
            <span>Colores</span>
            {productColors
              ? productColors.map((color) => {
                  let colorObj = colores.filter((c) => c.name === color)[0];
                  return (
                    <ColorButton
                      key={color}
                      color={colorObj?.hexa ? colorObj.hexa : null}
                      onClick={
                        admin
                          ? null
                          : () => {
                              setColor(color);
                            }
                      }
                    >
                      {admin ? (
                        <BorrarButton
                          onClick={() => functions.borrarColor(color)}
                        >
                          <p>x</p>
                        </BorrarButton>
                      ) : null}
                    </ColorButton>
                  );
                })
              : null}
            {admin ? (
              <AddButton
                onClick={() => {
                  dispatch(editIphoneAddColor(true));
                }}
              >
                <PlusCircleOutlined style={{ fontSize: 22 }} />
              </AddButton>
            ) : null}
            <AddColor id={detalle.id} detalle={detalle} />
          </ColorContainer>
        )}
        {admin ? null : <Button>Caracteristicas</Button>}
      </SupContainer>
      {usado ? (
        functions.editInput.batery ? (
          <ColorContainer>
            <PriceInput
              type="number"
              name="batery"
              id="batery"
              placeholder={functions.input.batery}
              required
              value={functions.input.batery}
              onChange={functions.handleInputChange}
            />
            <ConfirmEdit
              name="batery"
              functions={functions}
              input={functions.input}
              setInput={functions.setInput}
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
              edit={functions.edit}
              detalle={detalle}
            />
          </ColorContainer>
        ) : (
          <ColorContainer>
            <span>Condicion de bateria: {detalle.batery} % </span>
            {admin ? (
              <EditButton
                name="batery"
                editInput={functions.editInput}
                setEditInput={functions.setEditInput}
              />
            ) : null}
          </ColorContainer>
        )
      ) : null}
      {functions.editInput.price ? (
        <ColorContainer>
          <PriceInput
            type="number"
            name="price"
            id="price"
            placeholder={functions.input.price}
            required
            value={functions.input.price}
            onChange={functions.handleInputChange}
          />
          <ConfirmEdit
            name="price"
            functions={functions}
            input={functions.input}
            setInput={functions.setInput}
            editInput={functions.editInput}
            setEditInput={functions.setEditInput}
            edit={functions.edit}
            detalle={detalle}
          />
        </ColorContainer>
      ) : (
        <ColorContainer>
          <span>{detalle.price} USD </span>
          {admin ? (
            <EditButton
              name="price"
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
            />
          ) : (
            <Button color="secondary">Comprar</Button>
          )}
        </ColorContainer>
      )}
    </InfoContainer>
  );
}
