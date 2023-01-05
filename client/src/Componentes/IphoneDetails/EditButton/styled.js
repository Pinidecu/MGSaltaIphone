import styled from "styled-components";

export const EditButtonContainer = styled.button`
  border: ${(props) =>
    props.black ? "1px solid var(--border-gray)" : "1px solid var(--white)"};
  border-radius: 5px;
  padding: 5px;
  margin: 2px;

  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
  :hover {
    background-color: var(--tertiary-hover);
  }
`;
