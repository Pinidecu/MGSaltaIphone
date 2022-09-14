import { LinkContainer } from "./styled";

export default function Links({ name }) {
  return (
    <li>
      <LinkContainer
        href={
          name === "Inicio"
            ? "http://localhost:3000/"
            : `http://localhost:3000/${name}`
        }
        aria-current="page"
      >
        {name}
      </LinkContainer>
    </li>
  );
}
