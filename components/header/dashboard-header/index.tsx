import { StyledBell, StyledQuearBigLogoBlue } from "../../../ui/icons";
import { DashboardLinkColored } from "../../dashboard-login/styled";
import { DashboardHeaderRight, DashboardHeaderRoot } from "./styled";

export function DashboardHeader() {
  return (
    <DashboardHeaderRoot>
      <StyledQuearBigLogoBlue />
      <DashboardHeaderRight>
        <StyledBell />
        <DashboardLinkColored>Cerrar sesion</DashboardLinkColored>
      </DashboardHeaderRight>
    </DashboardHeaderRoot>
  );
}
