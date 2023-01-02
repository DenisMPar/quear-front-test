import styled from "@emotion/styled";
import { BodyPrimary } from "../../../../../ui/text";

export const StepCarInfoRoot = styled.div`
  display: grid;
  color: var(--primary);
  width: 100%;
  gap: 52px;

  @media screen and (min-width: 1024px) {
  }
`;
export const StepCarInfoContainerTitle = styled.div`
  text-align: center;
`;
export const StepCarSubtitle = styled(BodyPrimary)`
  font-size: 24px;
`;
export const StepCarForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const StepCarInfoContainerForm = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 1024px) {
  }
`;
export const StepCarInfoContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1024px) {
  }
`;
