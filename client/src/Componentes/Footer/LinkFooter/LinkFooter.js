import { Link } from "./styled";

export default function LinkFooter({ name }) {
  return (
    <li>
      <Link href={`http://localhost:3000/${name}`}>{name}</Link>
    </li>
  );
}
