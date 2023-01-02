import {
  DropContainer,
  DropLinkText,
  SideBarBottomContainer,
  SideBarLinkContainer,
  SideBarLinkText,
  SidebarRoot,
  SideBarTopContainer,
} from "./styled";
import Link from "next/link";
import { ReactNode } from "react";
import { StyledHomeColored, StyledUser } from "../../ui/icons";
import { getPath } from "../../lib/functions";
import { SubtitleSecondary, SubtitleTerciary } from "../../ui/text";

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

  return (
    <SidebarRoot>
      <SideBarTopContainer>
        {sideBarMenuLinksWithIcon.map((link) => {
          return (
            <>
              <SideBarLinkContainer>
                {link.icon}
                <Link key={link.text} href={link.href}>
                  <SideBarLinkText as={"p"}>{link.text}</SideBarLinkText>
                </Link>
              </SideBarLinkContainer>
              <DropContainer>
                {link.items?.map((item) => {
                  return (
                    <>
                      <Link key={link.text} href={item.href}>
                        <DropLinkText
                          active={path?.slice(0, 19) == item.href}
                          key={item.text}
                        >
                          {item.text}
                        </DropLinkText>
                      </Link>
                    </>
                  );
                })}
              </DropContainer>
            </>
          );
        })}
      </SideBarTopContainer>
      <SideBarBottomContainer>
        <SubtitleSecondary color="bg-secondary">
          Federico Gomez
        </SubtitleSecondary>
        <SubtitleTerciary color="bg-secondary">
          fgomez@quear.com.ar
        </SubtitleTerciary>
      </SideBarBottomContainer>
    </SidebarRoot>
  );
}
