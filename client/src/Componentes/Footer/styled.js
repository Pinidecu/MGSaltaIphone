import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  align-self: end;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  height: 70px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
  span {
    color: var(--font-secondary);

    a {
      :hover {
        text-decoration: underline var(--font-secondary);
      }
    }
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
`;
