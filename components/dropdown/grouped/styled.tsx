import styled from "@emotion/styled";
import { TextButton } from "../../../ui/buttons/styled";
import { BodyPrimary, SubtitlePrimary } from "../../../ui/text";
import { TextBox } from "../../../ui/text-box/styled";

export const DropDownGroupedRoot = styled(TextBox)`
  color: var(--dark-ligth);
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
`;
export const DropDownGroupedHeaderTitle = styled(SubtitlePrimary)`
  font-weight: 600;
  font-size: 16px;
`;
export const DropDownGroupedTitleContainer = styled(TextBox)`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const DropDownGroupedContentContainer = styled(TextBox)`
  padding: 16px 16px;
  padding-top: 0;
  @media screen and (min-width: 1024px) {
    padding: 30px 37px;
  }
`;
export const DropDownGroupedContainer = styled.div`
  font-size: 12px;
`;
export const DropDownGroupedTitle = styled(SubtitlePrimary)`
  line-height: 16px;
  font-size: 12px;
`;
export const DropDownGroupedValue = styled(BodyPrimary)`
  font-size: 16px;
`;
export const DropDownGroupedButtonContainer = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  margin: 0 auto;
  margin-top: 16px;
`;
