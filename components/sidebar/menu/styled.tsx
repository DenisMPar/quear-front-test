import styled from "@emotion/styled";
import { SubtitleSecondary } from "../../../ui/text";

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
