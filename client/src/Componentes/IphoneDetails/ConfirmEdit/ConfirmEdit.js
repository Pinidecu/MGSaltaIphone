import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { EditButtonContainer } from "../EditButton/styled";
import { CEContainer } from "./styled";

function ConfirmEdit({ name, functions, detalle }) {
  const editFunction = function (e) {
    functions.setEditInput({ ...functions.editInput, [name]: false });
    functions.edit(e, name);
  };
  return (
    <CEContainer>
      <EditButtonContainer
        id={name}
        onClick={(e) => {
          // eslint-disable-next-line no-lone-blocks
          {
            // eslint-disable-next-line no-unused-expressions
            name === "image" ? functions.guardarcambios(e) : null;
            // eslint-disable-next-line no-unused-expressions
            name !== "image" ? editFunction(e) : null;
          }
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
