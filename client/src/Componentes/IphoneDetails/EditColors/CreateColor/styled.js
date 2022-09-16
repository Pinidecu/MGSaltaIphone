import styled from "styled-components";

export const CreateColorContainer = styled.div`
  position: absolute;
  z-index: 100;
  background-color: var(--background-light);
  opacity: 100;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 5px;
`;

export const InputContainer = styled.div`
  margin: 0px 0 10px 0;

  display: flex;
  flex-direction: column;
  row-gap: 5px;
  label {
    font-size: 0.9em;
    color: var(--font-secondary);
  }
`;

export const ColorInput = styled.input`
  color: var(--font-secondary);
  width: 100%;
  border-radius: 10px;
  padding: 10px;
`;
//bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
//focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
//dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
//dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
