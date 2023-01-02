import {
  StyledEyeUnColored,
  StyledHomeUnColored,
  StyledMoneyUnColored,
  StyledSearchBig,
} from "../../../ui/icons";
import { MenuLinkDesktop } from "../../../ui/link/styled";
import { LinkWithIconHeader } from "../links";
import {
  HeaderDesktopContainer,
  HeaderDesktopLi,
  HeaderDesktopNav,
  HeaderDesktopRoot,
  HeaderDesktopUl,
} from "./styled";

export function HeaderDestkop() {
  return (
    <HeaderDesktopRoot>
      <HeaderDesktopContainer>
        <StyledSearchBig width="33px" height="32px" />
        <HeaderDesktopNav>
          <HeaderDesktopUl>
            <HeaderDesktopLi>
              <LinkWithIconHeader Icon={StyledHomeUnColored} href="/">
                Inicio
              </LinkWithIconHeader>
            </HeaderDesktopLi>
            <HeaderDesktopLi>
              <LinkWithIconHeader Icon={StyledMoneyUnColored} href="/cotiza">
                Cotizá
              </LinkWithIconHeader>
            </HeaderDesktopLi>
            <HeaderDesktopLi>
              <LinkWithIconHeader Icon={StyledEyeUnColored} href="/">
                Código de seguimiento
              </LinkWithIconHeader>
            </HeaderDesktopLi>
          </HeaderDesktopUl>
          <HeaderDesktopUl>
            <HeaderDesktopLi>
              <MenuLinkDesktop href={"/#about"}>Sobre Nosotros</MenuLinkDesktop>
            </HeaderDesktopLi>
            <HeaderDesktopLi>
              <MenuLinkDesktop href={"/#faq"}>
                Preguntas Frecuentes
              </MenuLinkDesktop>
            </HeaderDesktopLi>
            <HeaderDesktopLi>
              <MenuLinkDesktop href={"/contact"}>Contacto</MenuLinkDesktop>
            </HeaderDesktopLi>
          </HeaderDesktopUl>
        </HeaderDesktopNav>
      </HeaderDesktopContainer>
    </HeaderDesktopRoot>
  );
}
