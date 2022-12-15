import styled from "@emotion/styled";
import Link from "next/link";
import { animated } from "react-spring";
import {
  BodyPrimary,
  SubtitlePrimary,
  SubtitleSecondary,
  SubtitleTerciary,
} from "../../ui/text";

export const ContactPopUpRoot = styled(animated.aside)`
  display: grid;
  grid-template-rows: 4fr 1fr;

  margin: 0 auto;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  max-width: 600px;
  min-height: 70vh;
  padding: 27px 14px;
  padding-top: 33px;
  background: var(--bg);
  border-radius: 32px 32px 0px 0px;
`;
export const ContactPopUpContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 27px;
  max-width: 480px;
  margin: 0 auto;
`;
export const ContactPopUpTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactPopUpCloseContainer = styled.div`
  position: absolute;
  right: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactPopUpTitle = styled(SubtitlePrimary)`
  color: var(--primary);
  line-height: 21px;
`;
export const ContactPopUpSubTitle = styled(SubtitleTerciary)`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--dark-ligth);
`;
export const ContactPopUpBody = styled(SubtitlePrimary)`
  color: var(--primary);
  line-height: 24px;
`;
export const ContactPopUpTextContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ContactPopUpButtonText = styled(BodyPrimary)`
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
`;
export const ContactPopUpLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
`;
export const ContactPopUpPhoneContainer = styled.div`
  cursor: pointer;
`;
export const ContactPopUpSendMailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 346px;
  margin: 0 auto;
`;
export const ContactPopUpTextAreaContainer = styled.div`
  height: 218px;
`;
