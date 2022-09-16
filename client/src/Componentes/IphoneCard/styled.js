import styled from "styled-components";

export const ICContainer = styled.div`
  display: grid;
  width: 450px;
  max-height: 300px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
`;
