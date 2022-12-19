import styled from "@emotion/styled";

import { BodyPrimary, SubtitlePrimary, SubtitleTerciary } from "../../ui/text";

export const ContactPageRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 686px;
  max-width: 1098px;
  padding: 76px 0;
  padding-bottom: 46px;
  background: var(--bg);
  border-radius: 32px 32px 0px 0px;
`;
export const ContactPageContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 480px;
  margin: 0 auto;
`;
export const ContactPageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 39px;
`;
export const ContactPageCloseContainer = styled.div`
  position: absolute;
  right: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactPageTitle = styled(SubtitlePrimary)`
  font-size: 34px;
  color: var(--primary);
  line-height: 44px;
`;
export const ContactPageSubTitle = styled(SubtitleTerciary)`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--dark-ligth);
`;
export const ContactPageBody = styled(SubtitlePrimary)`
  font-size: 14px;
  color: var(--primary);
  line-height: 24px;
`;
export const ContactPageTextContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ContactPageButtonText = styled(BodyPrimary)`
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
`;
export const ContactPageLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
`;
export const ContactPagePhoneContainer = styled.div`
  cursor: pointer;
`;
export const ContactPageSendMailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 85px;
  gap: 16px;
  max-width: 573px;
  margin: 0 auto;
`;
export const ContactPageTextAreaContainer = styled.div`
  height: 276px;
`;
export const ContactPageSendButtonContainer = styled.div`
  align-self: flex-end;
  width: 100%;
  max-width: 343px;
`;
