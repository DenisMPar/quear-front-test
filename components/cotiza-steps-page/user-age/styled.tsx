import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../ui/text";

export const StyledSubtitle = styled(SubtitlePrimary)`
  font-size: 21px;
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
