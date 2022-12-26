import styled from "@emotion/styled";
import { ButtonPrimary } from "../../ui/buttons/styled";
import { BodyPrimary } from "../../ui/text";

export const Root = styled.div`
  height: calc(100vh - 105px);
  max-width: 375px;
  padding: 25px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const StepBackRoot = styled.div`
  place-self: flex-start;
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const StepBackText = styled(BodyPrimary)`
  align-self: flex-start;
  color: var(--dark-ligth);
  font-weight: 700;
`;
export const StepBackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(270deg);
`;
export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
export const StepsSubmitButton = styled(ButtonPrimary)`
  margin: 26px 0;
`;
export const StepsContainerLogo = styled.div`
  height: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
