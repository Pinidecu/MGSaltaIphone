import styled from "styled-components";

export const AddColorContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: clip;
  z-index: 100;
  display: ${(props) => (props.editIphoneAddColor ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const AddColorModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.9);
`;
