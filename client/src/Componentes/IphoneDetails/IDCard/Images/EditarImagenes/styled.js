import styled from "styled-components";

export const EIContainer = styled.div`
  width: 90%;
  z-index: 50;
`;

export const ICargadasContainer = styled.div`
  color: var(--white);
  margin: 5px; 
`;

export const ICargadas = styled.div`
  display: flex;
  flex: wrap;
  margin: 5px 0;
  align-self: center;
  column-gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const ImagenContainer = styled.div`
  height: 100px;
  border-radius: 2px;
  background-color: var(--white);
  position: relative;
  margin: 0 5px;
`;

export const ImagenButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  opacity: 0.6;
`;

export const Button = styled.button`
  position: absolute;
  align-self: flex-end;
  //hover:visible
`;

export const BorrarButton = styled.button`
  display: ${(props) => (props.display ? "none" : "flex")};
  position: absolute;
  top: 3px;
  right: 3px;
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
