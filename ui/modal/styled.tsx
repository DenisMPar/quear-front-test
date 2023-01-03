import styled from "@emotion/styled";
import { BodyPrimary, SubtitlePrimary } from "../../ui/text";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const ModalTitle = styled(SubtitlePrimary)`
  color: var(--primary);
  line-height: 22px;
  font-size: 16px;
`;
export const ModalText = styled(BodyPrimary)`
  color: var(--dark-ligth);
`;
