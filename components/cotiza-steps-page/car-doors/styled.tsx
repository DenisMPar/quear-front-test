import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../ui/text";

export const StepRoot = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  color: var(--primary);
  width: 100%;
  gap: 20px;
  text-align: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;
export const StepDoorsInputContainer = styled.div`
  height: 319px;
  @media screen and (min-width: 1024px) {
    height: 407px;
    max-width: 305px;
  }
`;
export const StyledSubtitle = styled(SubtitlePrimary)`
  margin: 60px 0;
`;
