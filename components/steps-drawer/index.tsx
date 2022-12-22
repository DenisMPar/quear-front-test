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
} from "./styled";

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export function StepsDrawer(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

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

      <SwipeableDrawer
        container={container}
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
          <StepsDrawertitle>Cotizá: Paso 1/10</StepsDrawertitle>
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
          <StepperComponent />
        </Box>
      </SwipeableDrawer>
    </StepsDrawerRoot>
  );
}
