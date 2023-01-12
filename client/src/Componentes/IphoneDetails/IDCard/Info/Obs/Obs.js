import ConfirmEdit from "../../../ConfirmEdit/ConfirmEdit";
import EditButton from "../../../EditButton/EditButton";
import { ObsContainer, EditContainer } from "./styled";

export default function Obs({ detalle, functions, admin }) {
  return (
    <ObsContainer>
      {functions.editInput.obs ? (
        <EditContainer>
          <textarea
            type="text"
            id="obs"
            name="obs"
            placeholder="Observaciones del producto"
            value={functions.input.obs}
            onChange={functions.handleInputChange}
          />
          <ConfirmEdit
            name="obs"
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
          <p>{detalle.obs}</p>
          {admin ? (
            <EditButton
              name="obs"
              editInput={functions.editInput}
              setEditInput={functions.setEditInput}
            />
          ) : null}
        </EditContainer>
      )}
    </ObsContainer>
  );
}
