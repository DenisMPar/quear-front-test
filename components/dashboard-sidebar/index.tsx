import {
  ArrowContainer,
  DropContainer,
  DropLinkText,
  SideBarBottomContainer,
  SideBarDropContainer,
  SideBarLeft,
  SideBarLinkContainer,
  SideBarLinkText,
  SideBarMenuContainer,
  SidebarRoot,
  SideBarTopContainer,
} from "./styled";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { StyledArrow, StyledHomeColored, StyledUser } from "../../ui/icons";
import { getPath } from "../../lib/functions";
import { SubtitleSecondary, SubtitleTerciary } from "../../ui/text";
import { useGetUserBO } from "../../lib/hooks";
import { ArrowSVGIcon } from "../../ui/icons/svg/arrow-icon";

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
    icon: <StyledUser color="secondary" />,
    text: "USUARIOS",
  },
];

export function DashboardSidebar() {
  const path = getPath();
  const userBO = useGetUserBO();
  const polizasPath = path?.slice(11, 18) === "polizas";
  const mensajesPath = path?.slice(11, 19) === "mensajes";
  const [showItems, setShowItems] = useState(true);

  function handleShowItems() {
    setShowItems(!showItems);
  }

  return (
    <SidebarRoot>
      <SideBarTopContainer>
        {sideBarMenuLinksWithIcon.map((link) => {
          return (
            <SideBarMenuContainer key={link.text}>
              <SideBarLinkContainer>
                <SideBarLeft>
                  {link.icon}
                  <Link href={link.href}>
                    <SideBarLinkText as={"p"}>{link.text}</SideBarLinkText>
                  </Link>
                </SideBarLeft>
                {link.items ? (
                  <ArrowContainer up={showItems} onClick={handleShowItems}>
                    <StyledArrow color="secondary"></StyledArrow>
                  </ArrowContainer>
                ) : null}
              </SideBarLinkContainer>
              <DropContainer>
                {showItems &&
                  link.items?.map((item) => {
                    return (
                      <SideBarDropContainer key={item.text}>
                        <Link href={item.href}>
                          <DropLinkText
                            active={
                              (item.text == "Pólizas" && polizasPath) ||
                              (item.text == "Mensajes" && mensajesPath)
                            }
                          >
                            {item.text}
                          </DropLinkText>
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
          {userBO ? `${userBO.name} ${userBO.lastName}` : ""}
        </SubtitleSecondary>
        <SubtitleTerciary color="bg-secondary">
          {userBO ? `${userBO.email}` : ""}
        </SubtitleTerciary>
      </SideBarBottomContainer>
    </SidebarRoot>
  );
}
