import Link from "next/link";
import { ReactNode } from "react";
import { getPath } from "../../../lib/functions";
import {
  StyledEyeColored,
  StyledHomeColored,
  StyledMoneyColored,
} from "../../../ui/icons";
import { SideBarStyledLine } from "../styled";
import {
  SideBarMenuContainer,
  SideBarMenuLinkContainer,
  SideBarMenuLinkText,
  SideBarMenuLinkTextDark,
} from "./styled";

interface Props {
  toggleContact: () => void;
}
type MenuLink = {
  href: string;
  text: string;
};
type LinkwithIcon = {
  href: string;
  icon: ReactNode;
  text: string;
};

const sideBarMenuLinksWithIcon: Array<LinkwithIcon> = [
  { href: "/", icon: <StyledHomeColored />, text: "Inicio" },
  {
    href: "/cotiza",
    icon: <StyledMoneyColored />,
    text: "Cotizá",
  },
  {
    href: "/seguimiento",
    icon: <StyledEyeColored />,
    text: "Código de seguimiento",
  },
];
const sideBarMenuLinks: Array<MenuLink> = [
  { href: "/about", text: "Sobre nosotros" },
  { href: "/faq", text: "Preguntas Frecuentes" },
];
export function SidebarMenuComponent(props: Props) {
  const path = getPath();
  return (
    <SideBarMenuContainer>
      {sideBarMenuLinksWithIcon.map((link) => {
        return (
          <Link key={link.text} href={link.href}>
            <SideBarMenuLinkContainer active={path == link.href}>
              {link.icon}
              <SideBarMenuLinkText as={"p"}>{link.text}</SideBarMenuLinkText>
            </SideBarMenuLinkContainer>
          </Link>
        );
      })}
      <SideBarStyledLine />
      {sideBarMenuLinks.map((link) => {
        return (
          <Link key={link.text} href={link.href}>
            <SideBarMenuLinkContainer active={path == link.href}>
              <SideBarMenuLinkTextDark as={"p"}>
                {link.text}
              </SideBarMenuLinkTextDark>
            </SideBarMenuLinkContainer>
          </Link>
        );
      })}
      <SideBarMenuLinkContainer
        active={path == "/contacto"}
        onClick={props.toggleContact}
      >
        <SideBarMenuLinkTextDark as={"p"}>Contacto</SideBarMenuLinkTextDark>
      </SideBarMenuLinkContainer>
    </SideBarMenuContainer>
  );
}
