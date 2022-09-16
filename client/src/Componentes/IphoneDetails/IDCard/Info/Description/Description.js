import ConfirmEdit from "../../../ConfirmEdit/ConfirmEdit";
import EditButton from "../../../EditButton/EditButton";
import { DescriptionContainer, EditContainer } from "./styled";

export default function Description({ detalle, functions, admin }) {
  return (
    <DescriptionContainer>
      {functions.editInput.description ? (
        <EditContainer>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Descripción del producto" 
            value={functions.input.description}
            onChange={functions.handleInputChange}
          />
          <ConfirmEdit
            name="description"
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
          <p>{detalle.description}</p>
          {admin ? (
            <EditButton
              name="description"
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
            />
          ) : null}
        </EditContainer>
      )}
    </DescriptionContainer>
  );
}
