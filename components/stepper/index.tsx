import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import { StyledEdit } from "../../ui/icons";
import { BodyPrimary } from "../../ui/text";
import { StepperConectorComponent } from "./connector";
import { StepperIconComponent } from "./icon";
import { StepperContainerEdit, StyledStepLabel } from "./styled";

interface Props {
  goToStep: (step: number) => void;
  stepsData: any;
  activeStep: number;
  completed: any;
  steps: any[];
}

export default function StepperComponent(props: Props) {
  function formatData(index: number) {
    const keys = Object.keys(props.stepsData);
    const dataToShow = props.stepsData[keys[index]];
    if (typeof dataToShow == "object") {
      const result = [];
      for (const key in dataToShow) {
        result.push(
          <BodyPrimary key={key}>
            {key}: {dataToShow[key]}
          </BodyPrimary>
        );
      }
      return result;
    } else {
      return <BodyPrimary>{dataToShow}</BodyPrimary>;
    }
  }
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
            >
              <div>
                {label}
                {props.completed[index] ? (
                  formatData(index)
                ) : (
                  <BodyPrimary>-</BodyPrimary>
                )}
              </div>
              {props.completed[index] && (
                <StepperContainerEdit onClick={() => props.goToStep(index)}>
                  <StyledEdit width="20px" height="20px" />
                </StepperContainerEdit>
              )}
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
