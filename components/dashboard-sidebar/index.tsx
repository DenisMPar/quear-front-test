import {
  DropContainer,
  DropLinkText,
  SideBarBottomContainer,
  SideBarDropContainer,
  SideBarLinkContainer,
  SideBarLinkText,
  SideBarMenuContainer,
  SidebarRoot,
  SideBarTopContainer,
} from "./styled";
import Link from "next/link";
import { ReactNode } from "react";
import { StyledHomeColored, StyledUser } from "../../ui/icons";
import { getPath } from "../../lib/functions";
import { SubtitleSecondary, SubtitleTerciary } from "../../ui/text";
import { getUserBO } from "../../lib/api";

type MenuLink = {
  href: string;
  text: string;
};

type LinkwithIcon = {
  href: string;
  icon: ReactNode;
  text: string;
  items?: MenuLink[];
};

const sideBarMenuLinksWithIcon: Array<LinkwithIcon> = [
  {
    href: "/dashboard/polizas",
    icon: <StyledHomeColored color="secondary" />,
    text: "HOME",
    items: [
      { href: "/dashboard/polizas", text: "Pólizas" },
      { href: "/dashboard/mensajes", text: "Mensajes" },
    ],
  },
  {
    href: "/dashboard/usuarios",
    icon: <StyledUser />,
    text: "USUARIOS",
  },
];

export function DashboardSidebar() {
  const path = getPath();
  const userBO = getUserBO();

  return (
    <SidebarRoot>
      <SideBarTopContainer>
        {sideBarMenuLinksWithIcon.map((link) => {
          return (
            <SideBarMenuContainer key={link.text}>
              <SideBarLinkContainer>
                {link.icon}
                <Link href={link.href}>
                  <SideBarLinkText as={"p"}>{link.text}</SideBarLinkText>
                </Link>
              </SideBarLinkContainer>
              <DropContainer>
                {link.items?.map((item) => {
                  return (
                    <SideBarDropContainer key={item.text}>
                      <Link href={item.href}>
                        <DropLinkText>{item.text}</DropLinkText>
                      </Link>
                    </SideBarDropContainer>
                  );
                })}
              </DropContainer>
            </SideBarMenuContainer>
          );
        })}
      </SideBarTopContainer>
      <SideBarBottomContainer>
        <SubtitleSecondary color="bg-secondary">
          {/* {userBO.name} {userBO.lastName} */}
        </SubtitleSecondary>
        <SubtitleTerciary color="bg-secondary"></SubtitleTerciary>
      </SideBarBottomContainer>
    </SidebarRoot>
  );
}
