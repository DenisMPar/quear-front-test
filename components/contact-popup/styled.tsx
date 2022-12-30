import styled from "@emotion/styled";
import { Drawer, SwipeableDrawer } from "@mui/material";
import Link from "next/link";
import { animated } from "react-spring";
import {
  BodyPrimary,
  SubtitlePrimary,
  SubtitleSecondary,
  SubtitleTerciary,
} from "../../ui/text";

export const ContactPopUpDrawer = styled(Drawer)`
  min-height: 70vh;
  &.MuiDrawer-root > .MuiPaper-root {
    border-radius: 32px 32px 0px 0px;
  }
`;

export const ContactPopUpRoot = styled(animated.aside)`
  min-height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
  gap: 10px;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;

  padding: 27px 14px;
  padding-bottom: 6px;
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
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
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

export const ContactPopUpBody = styled(SubtitlePrimary)`
  color: var(--primary);
  line-height: 24px;
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
