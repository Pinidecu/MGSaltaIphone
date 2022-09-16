import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { EditButtonContainer } from "../EditButton/styled";
import { CEContainer } from "./styled";

function ConfirmEdit({ name, functions, detalle }) {
  return (
    <CEContainer>
      <EditButtonContainer
        id={name}
        onClick={(e) => {
          functions.setEditInput({ ...functions.editInput, [name]: false });
          functions.edit(e, name);
        }}
      >
        <CheckOutlined style={{ fontSize: "20px", color: "white" }} />
      </EditButtonContainer>
      <EditButtonContainer
        onClick={() => {
          functions.setEditInput({ ...functions.editInput, [name]: false });
          functions.setInput({ ...functions.input, [name]: detalle[name] });
        }}
      >
        <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
      </EditButtonContainer>
    </CEContainer>
  );
}

export default ConfirmEdit;
