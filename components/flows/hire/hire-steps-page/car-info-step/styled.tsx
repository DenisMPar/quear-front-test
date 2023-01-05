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
export const StepCarInfoContainerInfo = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (min-width: 1024px) {
  }
`;
export const StepCarInfoText = styled(BodyPrimary)`
  cursor: pointer;
  color: var(--dark-ligth);
  font-weight: 600;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
export const StepCarInfoInputWrapper = styled.div`
  text-align: left;
`;
export const StepCarInfoError = styled.span`
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
  color: red;
`;
