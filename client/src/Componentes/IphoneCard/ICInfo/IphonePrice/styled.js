import styled from "styled-components";

export const IPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const Button = styled.button`
  font-size: 0.8em;
  font-weight: 700;
  background-color: var(--background-gray);
  border: 2px solid var(--border-gray);
  padding: 0.2em;
  margin: 0.5em;
  min-width: 25px;
`;

export const Price = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;
  background-color: var(--primary);
  padding: 0.5em;
  margin-top: 0.5em;
`;

export const Nota = styled.div`
  width: 100%;
  display: flex;
  visibility: ${(props) => (props.moneda === "dolar" ? "hidden" : "visible")};
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;

  p {
    font-size: 10px;
  }
`;
