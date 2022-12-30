import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../../../ui/text";

export const StepFuelRoot = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  color: var(--primary);
  width: 100%;
  gap: 20px;
  text-align: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;
export const StepFuelInputContainer = styled.div`
  height: 225px;
  @media screen and (min-width: 1024px) {
    height: 275px;
    max-width: 305px;
  }
`;
export const StyledSubtitle = styled(SubtitlePrimary)`
  margin: 1.5em 0;
  @media screen and (min-width: 1024px) {
    margin: 1em 0;
  }
`;
