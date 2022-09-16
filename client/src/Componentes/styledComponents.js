import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: flex;
  margin: 5px auto;
  color: var(--white);
  background-color: var(--secondary);
  border-radius: 5px;
  padding: 8px 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${(props) => (props.full ? "100%" : "none")};

  :hover {
    background-color: var(--secondary-hover);
  }
`;

export const RegularInput = styled.input`
  background-color: var(--background-input);
  border: 1px solid var(--background-gray);
  border-radius: 10px;
  padding: 7.5px;
  margin: 0.2em 0;
  font-size: 0.9em;
  width: 100%;
  color: var(--font-secondary);
`;
