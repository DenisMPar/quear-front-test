import styled from "@emotion/styled";
import { Box, styled as materialStyled } from "@mui/system";
import { StyledArrow } from "../../ui/icons";
import { SubtitlePrimary } from "../../ui/text";

export const StepsDrawerRoot = styled.div`
  height: 100%;
  padding: 0 18px;
`;

export const StepsDrawerHeader = styled(Box)`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 26px;
  height: 56px;
  position: absolute;
  top: -56px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
  visibility: visible;
  right: 0;
  left: 0;
  color: var(--bg);
  background-color: var(--primary);
`;
export const StepsDrawertitle = styled(SubtitlePrimary)`
  font-size: 14px;
`;
export const StepsDrawerArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
