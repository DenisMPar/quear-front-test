import { styled } from "@mui/system";

export const StyledIconRoot = styled("div")<{
  ownerState: { active?: boolean };
}>(({ ownerState }) => ({
  color: "var(--bg-terciary)",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "var(--primary)",
  }),
}));
