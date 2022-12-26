import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../ui/text";

export const StepGarageRoot = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  color: var(--primary);
  width: 100%;
  gap: 20px;
  text-align: center;
  align-items: center;
`;
export const StepGarageInputContainer = styled.div`
  height: 225px;
`;
export const StyledSubtitle = styled(SubtitlePrimary)`
  margin: 1.5em 0;
`;
