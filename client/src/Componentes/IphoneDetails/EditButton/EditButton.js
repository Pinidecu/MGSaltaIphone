import { EditOutlined } from "@ant-design/icons";
import { EditButtonContainer } from "./styled";

export default function EditButton({ name, editInput, setEditInput, black }) {
  return (
    <EditButtonContainer
      black={black}
      onClick={() => setEditInput({ ...editInput, [name]: true })}
    >
      <EditOutlined
        style={{ fontSize: "20px", color: black ? "black" : "white" }}
      />
    </EditButtonContainer>
  );
}
