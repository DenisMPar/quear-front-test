import styled from "@emotion/styled";
import { IconProps } from "@mui/material";
import { StyledArrow } from "../../ui/icons";
import { BodyPrimary } from "../../ui/text";
import { TextBox } from "../../ui/text-box/styled";

export const DropDownRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const DropDownTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DropDownTitle = styled(BodyPrimary)`
  color: var(--dark-ligth);
  font-weight: 700;
  line-height: 19px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DropDownContentContainer = styled(TextBox)`
  font-size: 13px;
  padding: 16px 12px;
`;
