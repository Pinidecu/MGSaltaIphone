import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: var(--font-primary);
  row-gap: 0.7em;

  h2 {
    font-size: 1em;
  }
  h1 {
    font-size: 1.3em;
    font-weight: 700;
  }
  p {
    font-size: 1em;
  }
`;

export const SupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: 3px solid var(--border-gray);
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  column-gap: 10px;

  span {
    font-size: 1.2em;
  }
`;

export const ColorButton = styled.button`
  border: 1px solid var(--border-gray);
  margin-left: 5px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
`;

export const BorrarButton = styled.button`
  display: flex;
  position: relative;
  top: -8px;
  right: -10px;
  background-color: var(--cancelled);
  width: 1em;
  height: 1em;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  :hover {
    background-color: var(--cancelled-hover);
  }
  p {
    color: var(--font-primary);
    text-align: center;
    font-size: 0.7em;
    margin-bottom: 2px;
    font-weight: 600;
  }
`;
//flex relative top-[-10px] right-[-12px] bg-red-200 hover:bg-red-400
// w-[1em] h-[1em] items-center justify-center rounded-full

export const Button = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 0.5em 1em;
  min-width: 200px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "secondary" ? "var(--secondary)" : "var(--tertiary)"};
  :hover {
    background-color: ${(props) =>
      props.color === "secondary"
        ? "var(--secondary-hover)"
        : "var(--tertiary-hover)"};
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px; 
`;

export const PriceInput = styled.input`
  border: 1px solid var(--border-gray);
  border-radius: 10px;
  width: 100%;
  padding: 7px 10px;
  color: var(--font-secondary);
  background-color: ${(props) => props.color};
`;
