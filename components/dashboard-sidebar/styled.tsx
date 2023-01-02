import styled from "@emotion/styled";
import { SubtitleSecondary } from "../../ui/text";

export const SidebarRoot = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  padding: 45px 27px;
`;

export const SideBarTopContainer = styled.div`
  position: fixed;
`;

export const SideBarBottomContainer = styled.div`
  position: fixed;
  bottom: 20px;
  gap: 10px;
`;

export const SideBarLinkContainer = styled.div`
  padding: 8px 16px;
  height: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

export const SideBarLinkText = styled(SubtitleSecondary)`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: var(--secondary);
  margin-top: 4px;
`;

export const DropContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px;
`;

interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
}

export const DropLinkText = styled.div<LinkProps>`
  padding-left: 48px;
  color: var(--secondary);
  background-color: ${(props) => (props.active ? "rgba(0, 43, 152, 1)" : "")};
  box-shadow: ${(props) => (props.active ? "0px 4px 4px var(--shadow)" : "")};
  border-radius: 25px;
  height: 30px;
  align-items: center;
  display: flex;
`;
