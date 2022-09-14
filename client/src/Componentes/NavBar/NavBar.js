import logo from "../../Imagenes/logoGris.png";
import mari from "../../Imagenes/mari.jpg";
import { Link } from "react-router-dom";
import Links from "./Links/Links";
import { LinksContainer, LinksUL, Logo, LogoImg, NavContainer } from "./styled";

export default function NavBar({ admin }) {
  return (
    <NavContainer>
      <Logo href="http://localhost:3000/">
        <LogoImg src={logo} alt="Logo" />
        <span>MG Salta Iphone</span>
      </Logo>

      <LinksContainer>
        <LinksUL>
          <Links name="Inicio" />
          <Links name="Nuevos" />
          <Links name="Usados" />
          <Links name="Accesorios" />
          <Links name="Nosotros" />
          <Links name="Contacto" />
        </LinksUL>
      </LinksContainer>
      <Link to={admin ? "/" : "/admin"}>
        <LogoImg src={admin ? mari : logo} alt="AdminLogo" admin={admin} />
      </Link>
    </NavContainer>
  );
}
