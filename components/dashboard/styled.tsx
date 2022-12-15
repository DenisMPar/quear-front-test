import styled from "@emotion/styled";
import { BodyPrimary, SubtitleSecondary } from "../../ui/text";

export const DashboardRoot = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const DashboardHeader = styled.header`
  height: 25vh;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DashboardContentContainer = styled.div`
  padding: 76px 0;
  margin: 0 auto;
  max-width: 520px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const DashboardLoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const DashboardTitle = styled(SubtitleSecondary)`
  text-align: center;
  font-weight: 500;
  font-size: 32px;
`;
export const DashboardInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const DashboardLabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const DashboardSubtitles = styled(SubtitleSecondary)`
  font-weight: 400;
  font-size: 20px;
`;
export const DashboardLink = styled.a`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const DashboardButtonContainer = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const DashboardLinkColored = styled(DashboardLink)`
  color: var(--primary);
`;
