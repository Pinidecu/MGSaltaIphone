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

  span {
    font-size: 1.2em;
    margin-right: 1em;
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
//flex ml-auto text-white bg-gray-400 border-0 py-2 px-6
//focus:outline-none hover:bg-gray-600 rounded
