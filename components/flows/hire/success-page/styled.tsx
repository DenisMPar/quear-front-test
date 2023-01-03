import styled from "@emotion/styled";
import { SubtitlePrimary, SubtitleSecondary } from "../../../../ui/text";

export const HireSuccessRoot = styled.div`
  min-height: calc(100vh - 49px);
  padding: 24px 16px;
  padding-top: 12%;
  background-color: var(--primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const HireSuccessTitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 18px;
`;
export const HireSuccessTitle = styled(SubtitlePrimary)`
  font-size: 26px;
  font-weight: 800;
`;

export const HireSuccessSubtitle = styled(SubtitleSecondary)`
  font-size: 26px;
  font-weight: 400;
`;
