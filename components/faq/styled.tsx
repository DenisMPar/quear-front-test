import styled from "@emotion/styled";
import { SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

export const FaqRoot = styled(TextBox)`
  padding: 24px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media screen and (min-width: 1024px) {
    padding: 58px 46px;
    gap: 40px;
  }
`;
export const FaqTitle = styled(SubtitleSecondary)`
  color: var(--primary);
  font-weight: 900;
  @media screen and (min-width: 1024px) {
    font-size: 35px;
  }
`;
export const FaqContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
