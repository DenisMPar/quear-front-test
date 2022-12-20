import styled from "@emotion/styled";
import {
  BodyPrimary,
  SubtitlePrimary,
  SubtitleTerciary,
} from "../../../ui/text";

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
export const ContactPageTitle = styled(SubtitlePrimary)`
  font-size: 34px;
  color: var(--primary);
  line-height: 44px;
`;
export const ContactPageTextContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ContactPageSubTitle = styled(SubtitleTerciary)`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--dark-ligth);
`;
export const ContactPageButtonText = styled(BodyPrimary)`
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
`;
