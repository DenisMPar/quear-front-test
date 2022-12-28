import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../ui/text";

export const StyledSubtitle = styled(SubtitlePrimary)`
  font-size: 21px;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
export const StyledFormContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;
export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1024px) {
    gap: 24px;
  }
`;
export const StyledInputContainer = styled.div``;
export const StepAgeInputError = styled.span`
  font-size: 12px;
  margin-top: 5px;
  color: red;
`;
export const StyledFormSelectContainer = styled.div`
  text-align: center;
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1024px) {
    gap: 36px;
  }
`;
