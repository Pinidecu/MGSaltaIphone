import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--white);
  padding: 10px 15px;
  top: 0px;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  & img {
    margin-right: 10px;
  }
  & span {
    align-self: center;
    font-weight: 600;
    font-size: 1.2em;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksUL = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  margin-top: 4px;
`;

export const LogoImg = styled.img`
  height: 35px;
  border-radius: ${(props) => (props.admin ? "20px" : null)};
`;
