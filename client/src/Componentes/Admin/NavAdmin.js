import { Link } from "react-router-dom";
import { NavAdminContainer, NavLink } from "./styled";

export default function NavAdmin({ admin }) {
  return (
    <NavAdminContainer>
      <NavLink to="/nuevoiphone">
        <Link to="/nuevoiphone">Nuevo iPhone</Link>
      </NavLink>
      <NavLink to="/nuevoiphone">
        <Link to="/nuevoiphoneusado">Nuevo iPhone Usado</Link>
      </NavLink>
      <NavLink to="/nuevoiphone">
        <Link to="/nuevoaccesorio">Nuevo Accesorio</Link>
      </NavLink>
    </NavAdminContainer>
  );
}
