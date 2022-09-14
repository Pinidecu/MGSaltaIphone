import styled from "styled-components";

export const NavAdminContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin: 15px;
`;

export const NavLink = styled.div`
  color: var(--font-secondary);
  background-color: var(--white);
  border: 2px solid var(--background-medium-light);
  padding: 15px; 
  cursor: pointer;

  :hover {
    background-color: var(--background-medium-light);
  }
`;
