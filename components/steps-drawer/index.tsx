import { Global } from "@emotion/react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { StyledArrow } from "../../ui/icons";
import StepperComponent from "../stepper";
import {
  StepsDrawerArrowContainer,
  StepsDrawerHeader,
  StepsDrawerRoot,
  StepsDrawertitle,
  StyledSwippeable,
} from "./styled";

const drawerBleeding = 56;

interface Props {
  goToStep: (step: number) => void;
  stepsData: any;
  activeStep: number;
  completed: any;
  steps: any[];
  title: string;
}

export function StepsDrawer(props: Props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  function handleStep(step: any) {
    props.goToStep(step);
    toggleDrawer();
  }

  return (
    <StepsDrawerRoot>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <StyledSwippeable
        anchor="bottom"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StepsDrawerHeader>
          <StepsDrawertitle>
            {props.title}: Paso{" "}
            {props.activeStep + 1 + "/" + props.steps.length}
          </StepsDrawertitle>
          <StepsDrawerArrowContainer
            onClick={toggleDrawer}
            style={{ transform: open ? "rotate(180deg)" : "" }}
          >
            <StyledArrow color="bg" />
          </StepsDrawerArrowContainer>
        </StepsDrawerHeader>
        <Box
          sx={{
            px: 2,
            py: "18px",
            height: "100%",
            overflow: "auto",
          }}
        >
          <StepperComponent
            steps={props.steps}
            completed={props.completed}
            activeStep={props.activeStep}
            stepsData={props.stepsData}
            goToStep={handleStep}
          />
        </Box>
      </StyledSwippeable>
    </StepsDrawerRoot>
  );
}
