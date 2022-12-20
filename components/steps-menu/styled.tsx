import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { StyledArrow } from "../../ui/icons";
import { SubtitlePrimary } from "../../ui/text";

export const StepsMenuHeader = styled(Box)`
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
export const StepsMenutitle = styled(SubtitlePrimary)`
  font-size: 14px;
`;
export const StepsMenuArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
