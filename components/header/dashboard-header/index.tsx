import { StyledQuearBigLogoBlue } from "../../../ui/icons";
import { DashboardLinkColored } from "../../dashboard-login/styled";
import { DashboardHeaderRight, DashboardHeaderRoot } from "./styled";

export function DashboardHeader() {
  return (
    <DashboardHeaderRoot>
      <StyledQuearBigLogoBlue />
      <DashboardHeaderRight>
        <DashboardLinkColored>Cerrar sesion</DashboardLinkColored>
      </DashboardHeaderRight>
    </DashboardHeaderRoot>
  );
}
