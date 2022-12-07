import styled from "@emotion/styled";
import Link from "next/link";

export const MenuLinkDesktopBold = styled(Link)`
  color: var(--bg);
  font-size: 16px;
  font-weight: 700;
`;
export const MenuLinkDesktop = styled(Link)`
  color: var(--bg);
  font-size: 16px;
  font-weight: 400;
  &:hover {
    color: var(--terciary);
  }
`;
