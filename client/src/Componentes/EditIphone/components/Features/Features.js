import ConfirmEdit from "../ConfirmEdit/ConfirmEdit";
import { FeatureContainer } from "./styled";
import {
  EditOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { EditButton } from "../styled";
import { FeaturesButton, FeaturesWrapper } from "../../styled";

function Features({
  more,
  setMore,
  input,
  setInput,
  edit,
  detalle,
  editInput,
  handleInputChange,
  setEditInput,
  admin
}) {
  return (
    <FeaturesWrapper>
      <FeaturesButton onClick={() => setMore(!more)}>
        <p>Ver Caracteristiscas</p>
        {more ? <CaretUpOutlined size={50} /> : <CaretDownOutlined />}
      </FeaturesButton>
      {more ? (
        editInput.features ? (
          <FeatureContainer>
            <textarea
              type="text"
              name="features"
              id="features"
              placeholder={input.features}
              required
              value={input.features}
              onChange={handleInputChange}
            />
            <ConfirmEdit
              name="features"
              input={input}
              setInput={setInput}
              editInput={editInput}
              setEditInput={setEditInput}
              edit={edit}
              detalle={detalle}
            />
          </FeatureContainer>
        ) : (
          <FeatureContainer>
            <p>{detalle.features}</p>
            {admin ? (
              <EditButton
                onClick={() => setEditInput({ ...editInput, features: true })}
              >
                <EditOutlined style={{ fontSize: "20px", color: "white" }} />
              </EditButton>
            ) : null}
          </FeatureContainer>
        )
      ) : null}
    </FeaturesWrapper>
  );
}

export default Features;
