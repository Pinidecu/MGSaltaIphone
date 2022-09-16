import { RegularInput } from "../../../../styledComponents";
import ConfirmEdit from "../../../ConfirmEdit/ConfirmEdit";
import EditButton from "../../../EditButton/EditButton";
import { NameContainer, EditContainer } from "./styled";

export default function Name({ detalle, functions, admin }) {
  return (
    <NameContainer>
      <h2>APPLE</h2>
      {functions.editInput.name ? (
        <EditContainer>
          <RegularInput
            type="text"
            name="name"
            id="name"
            placeholder={functions.input.name}
            required
            value={functions.input.name}
            onChange={functions.handleInputChange}
          />
          <ConfirmEdit
            name="name"
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
          <h1>{detalle.name}</h1>
          {admin ? (
            <EditButton
              name="name"
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
            />
          ) : null}
        </EditContainer>
      )}
    </NameContainer>
  );
}
