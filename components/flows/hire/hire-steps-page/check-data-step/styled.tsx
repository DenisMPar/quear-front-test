import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../../../ui/text";

export const StepCheckDataRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const StepCheckDataTitle = styled(SubtitlePrimary)`
  font-weight: 400;
  margin: 0 auto;
  max-width: 300px;
  color: var(--primary);
  font-size: 24px;
  text-align: center;
`;
