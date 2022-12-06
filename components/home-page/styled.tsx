import styled from "@emotion/styled";
import { PrimaryButton } from "../../ui/buttons/styled";
import { TitlePrimary, SubtitleSecondary } from "../../ui/text";

export const HomeRoot = styled.div`
  background-color: var(--primary);
  min-height: 100vh;
`;
export const HomeMain = styled.main`
  text-align: center;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 257px;
  margin: 76px 0 60px 0;
  color: var(--bg);
`;
export const HomeTitle = styled(TitlePrimary)`
  margin-top: 34px;
`;
export const HomeSubTitle = styled(SubtitleSecondary)`
  margin-top: 10px;
`;
export const HomeButton = styled(PrimaryButton)`
  margin-top: 45px;
  max-width: 214px;
`;
