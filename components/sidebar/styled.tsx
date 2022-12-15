import styled from "@emotion/styled";
import Link from "next/link";
import { animated } from "react-spring";
import { SubtitleSecondary } from "../../ui/text";

export const SideBarContainer = styled(animated.aside)`
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: var(--secondary);
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
export const SideBarHeader = styled.div`
  height: 49px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  padding: 0 16px;
`;
export const SideBarIconContainer = styled.div`
  margin: 0 auto;
  width: 90px;
  height: 90px;
  background-color: var(--primary);
  border-radius: 100%;
  display: flex;
  align-items: center;
  padding-left: 23px;
`;
export const SideBarMenuContainer = styled.nav`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
`;
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
}
export const SideBarMenuLinkContainer = styled.div<ContainerProps>`
  background-color: ${(props) => (props.active ? "var(--bg)" : "")};
  padding: 8px 16px;
  height: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 18px;
  border-radius: 12px;
  box-shadow: ${(props) => (props.active ? "0px 4px 4px var(--shadow)" : "")};
`;
export const SideBarMenuLinkText = styled(SubtitleSecondary)`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: var(--primary);
`;
export const SideBarMenuLinkTextDark = styled(SubtitleSecondary)`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: var(--dark-ligth);
`;
export const SideBarHamburguerContainer = styled.div`
  cursor: pointer;
`;
export const SideBarStyledLine = styled.hr`
  margin: 0;
  height: 1px;
  background-color: var(--primary);
  border: none;
`;
