import styled from "@emotion/styled";
import { SubtitlePrimary } from "../../../../../ui/text";

export const PolicyRoot = styled.div`
  flex-grow: 2;
  height: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PolicyInfoContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 7px;
  margin-bottom: 20px;
`;
export const PolicyInfoTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const PolicyInfoIconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--terciary);
  border-radius: 100%;
  transform: rotate(180deg);
`;
export const PolicyTitle = styled(SubtitlePrimary)`
  font-size: 14px;
  line-height: 17px;
`;
