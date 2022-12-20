import styled from "@emotion/styled";
import { BodyPrimary, SubtitleTerciary } from "../../../ui/text";

export const ContactPopUpTextContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ContactPopUpSubTitle = styled(SubtitleTerciary)`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--dark-ligth);
`;
export const ContactPopUpButtonText = styled(BodyPrimary)`
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
`;
