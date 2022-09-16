import styled from "styled-components";

export const ICInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em; 

  h1 {
    font-size: 1em;
    font-weight: 700;
  }

  h4 {
    font-size: 0.9em;
  }
`;

export const IphoneName = styled.h1`
  font-size: 1em;
  font-weight: 700;
`;

export const ICButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1em 0;
  width: 90%;
  padding: 0.5em 0;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.color === "white"
      ? "2px solid var(--border-gray)"
      : "2px solid var(--deep-black)"};

  color: ${(props) =>
    props.color === "white" ? "var(--font-secondary)" : "var(--font-primary)"};
  background-color: ${(props) =>
    props.color === "white" ? "var(--white)" : "var(--deep-black)"};

  p {
    font-weight: 600;
  }
  :hover {
    border: 2px solid var(--deep-black);
    background-color: ${(props) =>
      props.color === "white" ? "var(--background)" : "var(--font-secondary)"};
  }
`;
