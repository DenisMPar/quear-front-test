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
  cursor: pointer;
`;
export const DropDownTitle = styled(BodyPrimary)`
  color: var(--dark-ligth);
  font-weight: 700;
  line-height: 19px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ArrowContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
export const ArrowContainerMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const DropDownContentContainer = styled(TextBox)`
  font-size: 13px;
  padding: 16px 12px;
  @media screen and (min-width: 1024px) {
    padding: 30px 37px;
    font-size: 20px;
  }
`;
