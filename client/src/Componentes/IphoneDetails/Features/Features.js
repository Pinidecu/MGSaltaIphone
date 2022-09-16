import ConfirmEdit from "../ConfirmEdit/ConfirmEdit";
import { FeatureContainer, FeaturesButton, FeaturesWrapper } from "./styled";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import EditButton from "../EditButton/EditButton";

function Features({ functions, detalle, admin }) {
  return (
    <FeaturesWrapper>
      <FeaturesButton onClick={() => functions.setMore(!functions.more)}>
        <p>Ver Caracteristiscas</p>
        {functions.more ? <CaretUpOutlined size={50} /> : <CaretDownOutlined />}
      </FeaturesButton>
      {functions.more ? (
        functions.editInput.features ? (
          <FeatureContainer>
            <textarea
              type="text"
              name="features"
              id="features"
              placeholder={functions.input.features}
              required
              value={functions.input.features}
              onChange={functions.handleInputChange}
            />
            <ConfirmEdit
              name="features"
              functions={functions}
              detalle={detalle}
            />
          </FeatureContainer>
        ) : (
          <FeatureContainer>
            <p>{detalle.features}</p>
            {admin ? (
              <EditButton
                name="features"
                editInput={functions.editInput}
                setEditInput={functions.setEditInput}
              />
            ) : null}
          </FeatureContainer>
        )
      ) : null}
    </FeaturesWrapper>
  );
}

export default Features;
