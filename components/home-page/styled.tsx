import styled from "@emotion/styled";
import { SancorSVGIcon } from "../../ui/icons/svg/sancor-icon";

export const HomeRoot = styled.div`
  min-height: 100vh;
  background-color: var(--primary);
  @media screen and (min-width: 1024px) {
    background-color: var(--bg-secondary);
  }
`;

export const HomeMainBackground = styled.div`
  height: 100%;
  background-color: var(--primary);
  padding: 76px 0 60px 0;
`;

export const HomeAboutBackground = styled.div`
  background-color: var(--bg-secondary);
`;

export const HomeSancorIcon = styled(SancorSVGIcon)`
  @media screen and (min-width: 1024px) {
    width: 226px;
    height: 112px;
  }
`;
