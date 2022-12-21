import styled from "@emotion/styled";
import { animated } from "react-spring";
import { SubtitleSecondary } from "../../ui/text";

export const SideBarContainer = styled(animated.aside)`
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
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

export const SideBarHamburguerContainer = styled.div`
  cursor: pointer;
`;
export const SideBarStyledLine = styled.hr`
  margin: 0;
  height: 1px;
  background-color: var(--primary);
  border: none;
`;
