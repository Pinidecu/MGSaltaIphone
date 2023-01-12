import { RegularInput } from "../../../../styledComponents";
import ConfirmEdit from "../../../ConfirmEdit/ConfirmEdit";
import EditButton from "../../../EditButton/EditButton";
import { ColorUsadoContainer, EditContainer } from "./styled";

export default function ColorUsado({ detalle, functions, admin }) {
  return (
    <ColorUsadoContainer>
      {functions.editInput.color ? (
        <EditContainer>
          <RegularInput
            type="text"
            name="color"
            id="color"
            placeholder={functions.input.color}
            required
            value={functions.input.color}
            onChange={functions.handleInputChange}
          />
          <ConfirmEdit
            name="color"
            functions={functions}
            input={functions.input}
            setInput={functions.setInput}
            editInput={functions.editInput}
            setEditInput={functions.setEditInput}
            edit={functions.edit}
            detalle={detalle}
          />
        </EditContainer>
      ) : (
        <EditContainer>
          <p>Color {detalle.color}</p>
          {admin ? (
            <EditButton
              name="color"
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
            />
          ) : null}
        </EditContainer>
      )}
    </ColorUsadoContainer>
  );
}
