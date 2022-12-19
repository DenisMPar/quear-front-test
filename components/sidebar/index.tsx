import Link from "next/link";
import { useTransition } from "react-spring";
import { getPath } from "../../lib";
import {
  StyledClose,
  StyledEyeColored,
  StyledHamburguer,
  StyledHomeColored,
  StyledMoneyColored,
  StyledSearchBig,
} from "../../ui/icons";
import {
  SideBarContainer,
  SideBarHamburguerContainer,
  SideBarHeader,
  SideBarIconContainer,
  SideBarMenuContainer,
  SideBarMenuLinkContainer,
  SideBarMenuLinkText,
  SideBarMenuLinkTextDark,
  SideBarStyledLine,
} from "./styled";

type props = {
  show: boolean;
  toggle: () => void;
  toggleContact: () => void;
};

export const SideBarComponent = (props: props) => {
  const path = getPath();
  const menuTranstition = useTransition(props.show, {
    from: { opacity: 0, left: `-100%` },
    enter: { opacity: 1, left: `0` },
    leave: { opacity: 0, left: `-100%` },
  });

  return (
    <>
      {menuTranstition((style, show) =>
        show ? (
          <SideBarContainer style={style} onClick={props.toggle}>
            <SideBarHeader>
              <StyledClose color="bg" width="26px" height="26px" />
            </SideBarHeader>
            <SideBarIconContainer>
              <StyledSearchBig width="47px" height="44px" />
            </SideBarIconContainer>
            <SideBarMenuContainer>
              <Link href={"/"}>
                <SideBarMenuLinkContainer active={path == "/"}>
                  <StyledHomeColored />
                  <SideBarMenuLinkText as={"p"}>Inicio</SideBarMenuLinkText>
                </SideBarMenuLinkContainer>
              </Link>
              <Link href={"/cotiza"}>
                <SideBarMenuLinkContainer active={path == "/cotiza"}>
                  <StyledMoneyColored />
                  <SideBarMenuLinkText as={"p"}>Cotizá</SideBarMenuLinkText>
                </SideBarMenuLinkContainer>
              </Link>
              <Link href={"/seguimiento"}>
                <SideBarMenuLinkContainer active={path == "/seguimiento"}>
                  <StyledEyeColored />
                  <SideBarMenuLinkText as={"p"}>
                    Código de seguimiento
                  </SideBarMenuLinkText>
                </SideBarMenuLinkContainer>
              </Link>
              <SideBarStyledLine />
              <Link href={"/about"}>
                <SideBarMenuLinkContainer active={path == "/about"}>
                  <SideBarMenuLinkTextDark as={"p"}>
                    Sobre nosotros
                  </SideBarMenuLinkTextDark>
                </SideBarMenuLinkContainer>
              </Link>
              <Link href={"/faq"}>
                <SideBarMenuLinkContainer active={path == "/faq"}>
                  <SideBarMenuLinkTextDark as={"p"}>
                    Preguntas Frecuentes
                  </SideBarMenuLinkTextDark>
                </SideBarMenuLinkContainer>
              </Link>
              <SideBarMenuLinkContainer
                active={path == "/contacto"}
                onClick={props.toggleContact}
              >
                <SideBarMenuLinkTextDark as={"p"}>
                  Contacto
                </SideBarMenuLinkTextDark>
              </SideBarMenuLinkContainer>
            </SideBarMenuContainer>
          </SideBarContainer>
        ) : (
          <SideBarHamburguerContainer onClick={props.toggle}>
            <StyledHamburguer />
          </SideBarHamburguerContainer>
        )
      )}
    </>
  );
};
