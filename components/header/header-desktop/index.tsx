import {
  StyledEyeUnColored,
  StyledHomeUnColored,
  StyledMoneyUnColored,
} from "../../../ui/icons";
import { MenuLinkDesktop, MenuLinkDesktopBold } from "../../../ui/link/styled";
import { LinkWithIconHeader } from "../links";
import {
  HeaderDesktopLi,
  HeaderDesktopNav,
  HeaderDesktopRoot,
  HeaderDesktopUl,
} from "./styled";

export function HeaderDestkop() {
  return (
    <HeaderDesktopRoot>
      <HeaderDesktopNav>
        <HeaderDesktopUl>
          <HeaderDesktopLi>
            <LinkWithIconHeader Icon={StyledHomeUnColored} href="/">
              Inicio
            </LinkWithIconHeader>
          </HeaderDesktopLi>
          <HeaderDesktopLi>
            <LinkWithIconHeader Icon={StyledMoneyUnColored} href="/">
              Inicio
            </LinkWithIconHeader>
          </HeaderDesktopLi>
          <HeaderDesktopLi>
            <LinkWithIconHeader Icon={StyledEyeUnColored} href="/">
              Inicio
            </LinkWithIconHeader>
          </HeaderDesktopLi>
        </HeaderDesktopUl>
        <HeaderDesktopUl>
          <HeaderDesktopLi>
            <MenuLinkDesktop href={"/"}>Sobre Nosotros</MenuLinkDesktop>
          </HeaderDesktopLi>
          <HeaderDesktopLi>
            <MenuLinkDesktop href={"/cotiza"}>
              Preguntas Frecuentes
            </MenuLinkDesktop>
          </HeaderDesktopLi>
          <HeaderDesktopLi>
            <MenuLinkDesktop href={"/code"}>Contacto</MenuLinkDesktop>
          </HeaderDesktopLi>
        </HeaderDesktopUl>
      </HeaderDesktopNav>
    </HeaderDesktopRoot>
  );
}
