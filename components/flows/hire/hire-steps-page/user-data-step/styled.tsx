import styled from "@emotion/styled";
import { BodyPrimary } from "../../../../../ui/text";

export const StepUserDataRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 100px;
  @media screen and (min-width: 1024px) {
  }
`;
export const StepUserDataTitle = styled(BodyPrimary)`
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
  color: var(--primary);
`;
export const StepUserDataForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
