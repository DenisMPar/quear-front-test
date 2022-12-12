import styled from "@emotion/styled";
import { ButtonPrimary } from "../../ui/buttons/styled";
import { TitlePrimary, SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

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
export const HomeButton = styled(ButtonPrimary)`
  margin-top: 45px;
  max-width: 214px;
`;
export const HomeAbout = styled.div`
  width: 100%;
  color: var(--dark-ligth);
  line-height: 24px;
  padding: 25px 20px 14px 20px;
  border-radius: 25px 25px 0 0;
  background-color: var(--bg-secondary);
`;
export const HomeAboutTextBox = styled(TextBox)`
  text-align: center;
  padding: 16px 20px;
  padding-top: 36px;
`;
