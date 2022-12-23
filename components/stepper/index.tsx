import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import { StyledEdit } from "../../ui/icons";
import { BodyPrimary } from "../../ui/text";
import { StepperConectorComponent } from "./connector";
import { StepperIconComponent } from "./icon";
import { StyledStepLabel } from "./styled";

interface Props {
  goToStep: (step: number) => void;
  stepsData: any;
  activeStep: number;
  completed: any;
  steps: any[];
}

export default function StepperComponent(props: Props) {
  const keys = Object.keys(props.stepsData);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        orientation="vertical"
        nonLinear
        activeStep={props.activeStep}
        connector={<StepperConectorComponent />}
      >
        {props.steps.map((label, index) => (
          <Step key={label} completed={props.completed[index]}>
            <StyledStepLabel
              StepIconComponent={StepperIconComponent}
              color="inherit"
              onClick={() => props.goToStep(index)}
            >
              <div>
                {label}
                {props.completed[index] ? (
                  <BodyPrimary>{props.stepsData[keys[index]]}</BodyPrimary>
                ) : (
                  <BodyPrimary>-</BodyPrimary>
                )}
              </div>
              {props.completed[index] && (
                <StyledEdit width="20px" height="20px" />
              )}
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
