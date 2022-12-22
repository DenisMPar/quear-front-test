import { StepIconProps } from "@mui/material";
import { StyledBullet, StyledCheckRounded } from "../../../ui/icons";
import { StyledIconRoot } from "./styled";

export function StepperIconComponent(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <StyledIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledCheckRounded width="17px" height="17px" color="primary" />
        </div>
      ) : active ? (
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledBullet width="7px" height="7px" color="dark-ligth" />
        </div>
      ) : (
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledBullet width="7px" height="7px" color="bg-terciary" />
        </div>
      )}
    </StyledIconRoot>
  );
}
