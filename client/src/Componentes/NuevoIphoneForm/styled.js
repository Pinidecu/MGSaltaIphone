import styled from "styled-components";

export const NuevoIphoneContainer = styled.form`
  display: flex;
  width: 70%; 
  justify-content: center;
  align-self: center;
  margin: 100px auto 20px;
  padding: 2em;
  column-gap: 2em;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
`;

export const NIForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%; 
`;

export const NPContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  margin-bottom: 10px;

  label {
    font-size: 0.9em;
    margin-bottom: 1em;
  }
`;

export const NIInput = styled.input`
  background-color: var(--background-input);
  border: 1px solid var(--background-gray);
  border-radius: 10px;
  padding: 7.5px;
  margin: 0.2em 0;
  font-size: 0.9em;
  width: 100%;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;

  label {
    font-size: 0.9em;
  }
`;

export const ColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ACButton = styled.button`
  display: flex;
  margin: 5px auto;
  color: var(--secondary);
`;

export const NewColorForm = styled.div`
  background-color: var(--primary-hover);
  border-radius: 10px;
  padding: 10px 20px;
  display: ${(props) => (props.visible ? null : "none")};
`;


 