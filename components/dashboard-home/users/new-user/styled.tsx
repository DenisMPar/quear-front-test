import styled from "@emotion/styled";
import {
  ButtonBig,
  ButtonOutlined,
  ButtonPrimary,
} from "../../../../ui/buttons/styled";
import { TitlePrimary } from "../../../../ui/text";

export const PopUpNewUserBack = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 250px;
`;

export const PopUpNewUserRoot = styled.div`
  width: calc(100vw - 300px);
  border-radius: 12px;
  background-color: #fff;
  padding: 32px 25px;
`;

export const PopUpHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PopUpTitle = styled(TitlePrimary)`
  font-size: 24px;
  font-weight: 700;
`;

export const PopUpOptionsCointainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  grid-gap: 20px;
  margin-top: 20px;
`;
export const PopUpOptionCointainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PopUpTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  gap: 20px;
  padding-right: 10px;
`;

export const ButtonType = styled(ButtonBig)`
  font-weight: 600;
  font-size: 18px;
  color: rgba(65, 69, 251, 1);
`;

export const PopUpButtonsContainer = styled.div`
  margin-top: 67px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 50%;
  padding-right: 10px;
`;

export const PopUpButtonPrimary = styled(ButtonPrimary)`
  height: 48px;
  font-size: 18px;
  font-weight: 400;
`;
export const PopUpButtonOutlined = styled(ButtonOutlined)`
  height: 48px;
  font-size: 18px;
  font-weight: 400;
`;
