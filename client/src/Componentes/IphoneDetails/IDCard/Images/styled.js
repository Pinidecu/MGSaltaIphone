import styled from "styled-components";

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  width: 400px;
  height: 400px;
  background-color: var(--white);
  border: 1px solid var(--border-gray);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 0.9;
  z-index: 20;
`;

export const EBContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 50;
  margin: 4px;
`;
export const ConfirmContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 50;
  margin: 4px;
`;
