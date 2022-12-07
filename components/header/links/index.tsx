import { ComponentType, ReactNode, useState } from "react";
import { IconsProps } from "../../../ui/icons";
import { MenuLinkDesktopBold } from "../../../ui/link/styled";
import { LinkRoot } from "./styled";
interface Props {
  href: string;
  children: ReactNode;
  Icon: ComponentType<IconsProps>;
}
export const LinkWithIconHeader = ({ Icon, href, children }: Props) => {
  const [hover, setHover] = useState(false);
  function toggleHover() {
    setHover(!hover);
  }
  return (
    <MenuLinkDesktopBold
      href={href}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <LinkRoot>
        <Icon color={hover ? "terciary" : "bg"} />
        {children}
      </LinkRoot>
    </MenuLinkDesktopBold>
  );
};
