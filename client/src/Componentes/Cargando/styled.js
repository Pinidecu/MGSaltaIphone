import styled from "styled-components";

export const CargandoContainer = styled.div`
  content: "";
  border: ${(props) =>
    props.color === "primary"
      ? "2px solid var(--font-primary)"
      : props.color === "secondary"
      ? "2px solid var(--font-secondary)"
      : "2px solid var(--font-primary)"};
  border-left-color: transparent;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 0px 10px;
  animation: spin 1s linear infinite;
`;
