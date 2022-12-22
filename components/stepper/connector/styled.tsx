import styled from "@emotion/styled";
import {
  StepConnector,
  stepConnectorClasses,
  styled as materialStyled,
} from "@mui/material";

export const StyledStepConnector = materialStyled(StepConnector)({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },

  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "var(--primary)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: "100%",
    display: "inline-block",
    margin: 0,
    width: "20px",
    borderColor: "#E0E0E0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
});
export const StepperStyledLine = styled.hr`
  align-self: center;
  width: 100%;
  margin: 0;
  height: 1px;
  background-color: var(--bg-terciary);
  border: none;
`;
