import styled from "styled-components";

export const SelectColorContainer = styled.div`
  position: absolute;
  z-index: 100;
  background-color: var(--background-light);
  opacity: 100;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  color: var(--font-secondary);
  width: 500px;
  overflow-y: auto;
  max-height: 90vh;
  label {
    font-size: 0.9em;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 5px;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 5px;
`;

export const NewColorButton = styled.button`
  display: flex;
  color: var(--secondary);
  margin: 5px;
  align-items: center;
  justify-content: center;
  :hover {
    color: var(--secondary-hover);
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;
