import styled from "styled-components";

export const ColorButton = styled.button`
  border: 1px solid var(--border-gray);
  margin-left: 5px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
`;
