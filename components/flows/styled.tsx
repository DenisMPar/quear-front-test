import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ButtonPrimary } from "../../ui/buttons/styled";
import { BodyPrimary, SubtitleSecondary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

export const Root = styled.div`
  height: 100%;
  min-height: calc(100vh - 105px);
  max-width: 600px;
  padding: 25px 16px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 30fr;
  gap: 5vh;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    min-height: none;
    padding-top: 39px;
    padding-bottom: 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 7fr;
    max-width: 1095px;
    gap: 0;
  }
`;
export const StepBackRoot = styled.div`
  place-self: flex-start;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    grid-area: 1 / 1 / 2 / 2;
  }
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
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  @media screen and (min-width: 1024px) {
    max-width: none;
    grid-area: 2 / 1 / 3 / 2;
  }
`;
export const StepsSubmitButton = styled(ButtonPrimary)`
  max-width: 327px;
  margin: 26px auto;
  &:disabled {
    background-color: var(--primary-disabled);
  }
`;
export const StepsContainerSubmit = styled.div`
  height: 100%;
  margin-bottom: 56px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;
export const StepsContainerLogo = styled.div`
  margin: 0px auto;
  padding: 37px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const InfoDesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    padding-top: 16px;
    height: 100%;
    width: 100%;
    max-width: 431px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    grid-area: 1 / 2 / 3 / 3;
    place-self: flex-end;
  }
`;
export const StepperDesktopContainer = styled(Box)`
  padding: 18px 16px;
  height: 100%;
  max-height: 760px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0px 1px 4px var(--shadow);
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 1px;
  /* -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  } */

  & {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-terciary) var(--bg);
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-terciary);
    border-radius: 20px;
    border: 3px solid var(--bg);
  }
`;
export const StepperDesktopBoxTitle = styled(TextBox)`
  max-height: 40px;
  padding: 8px 16px;
`;
export const StepperDesktopTitle = styled(SubtitleSecondary)`
  font-weight: 700;
`;
