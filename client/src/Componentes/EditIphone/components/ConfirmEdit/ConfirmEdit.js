import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { EditButton } from "../styled";
import { CEContainer } from "./styled";

function ConfirmEdit({
  name,
  input,
  setInput,
  editInput,
  setEditInput,
  edit,
  detalle,
}) {
  return (
    <CEContainer>
      <EditButton
        id={name}
        onClick={(e) => {
          setEditInput({ ...editInput, [name]: false });
          edit(e, name);
        }}
      >
        <CheckOutlined style={{ fontSize: "20px", color: "white" }} />
      </EditButton>
      <EditButton
        onClick={() => {
          setEditInput({ ...editInput, features: false });
          setInput({ ...input, features: detalle.features });
        }}
      >
        <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
      </EditButton>
    </CEContainer>
  );
}

export default ConfirmEdit;
