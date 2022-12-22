import { StepConnectorProps } from "@mui/material";
import { StepperStyledLine, StyledStepConnector } from "./styled";

export function StepperConectorComponent(props: StepConnectorProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledStepConnector sx={{ width: "20px" }}></StyledStepConnector>
      <StepperStyledLine />
    </div>
  );
}
