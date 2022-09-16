import { EditOutlined } from "@ant-design/icons";
import { EditButtonContainer } from "./styled";

export default function EditButton({ name, editInput, setEditInput }) {
  return (
    <EditButtonContainer
      onClick={() => setEditInput({ ...editInput, [name]: true })}
    >
      <EditOutlined style={{ fontSize: "20px", color: "white" }} />
    </EditButtonContainer>
  );
}
