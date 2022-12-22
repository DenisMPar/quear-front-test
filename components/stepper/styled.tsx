import styled from "@emotion/styled";
import { StepLabel } from "@mui/material";
import { CheckRoundedSVGIcon } from "../../ui/icons/svg/check-rounded-icon";

export const StyledStepLabel = styled(StepLabel)`
  padding: 0;

  & .MuiStepLabel-labelContainer {
    font-weight: 700;
    color: var(--dark-terciary);
  }
  & .MuiStepLabel-root {
    font-weight: 700;
  }
  & .MuiStepLabel-label {
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: inherit;
  }
  & .MuiStepLabel-labelContainer .Mui-completed {
    font-weight: 700;
    color: var(--primary);
  }
  & .MuiStepLabel-labelContainer .Mui-active {
    font-weight: 700;
    color: var(--dark-ligth);
  }
`;

export const CheckRoundedStepper = styled(CheckRoundedSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: inherit;
`;
