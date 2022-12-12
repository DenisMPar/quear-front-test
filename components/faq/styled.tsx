import styled from "@emotion/styled";
import { SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

export const FaqRoot = styled(TextBox)`
  padding: 15px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
export const FaqTitle = styled(SubtitleSecondary)`
  color: var(--primary);
  font-weight: 900;
`;
export const FaqContainerQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
