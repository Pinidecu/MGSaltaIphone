import LinkFooter from "./LinkFooter/LinkFooter";
import { FooterContainer, LinksContainer } from "./styled";

export default function Footer() {
  return (
    <FooterContainer>
      <span>
        {"© 2022 "}
        <a href="https://instagram.com/ezequieldecu" target="blank">
          Vintech™
        </a>
        . All Rights Reserved.
      </span>
      <LinksContainer>
        <LinkFooter name="About" />
        <LinkFooter name="Privacy Policy" />
        <LinkFooter name="Licensing" />
        <LinkFooter name="Contact" />
      </LinksContainer>
    </FooterContainer>
  );
}
