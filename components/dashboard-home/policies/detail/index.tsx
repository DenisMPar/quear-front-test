import { DashboardSidebar } from "../../../dashboard-sidebar";
import { DashboardHeader } from "../../../header/dashboard-header";
import { DashboardHomeRightRoot, DashboardHomeRoot } from "../../styled";
import { SubtitleDashboardSecondary } from "../styled";
import { DetailPolicyForm } from "./detailForm";
import {
  DetailMainContainer,
  DetailPolicyHeaderContainer,
  DetailPolicyRoot,
  DetailSubtitlePrimary,
} from "./styles";

export function DashboardDetailPolicy() {
  return (
    <DashboardHomeRoot>
      <DashboardSidebar />
      <DashboardHomeRightRoot>
        <DashboardHeader />
        <DetailPolicyRoot>
          <DetailPolicyHeaderContainer>
            <DetailSubtitlePrimary>
              Detalle Póliza - Estado PENDIENTE
            </DetailSubtitlePrimary>
            <DetailSubtitlePrimary color="primary">
              JUAN GONZALEZ - Nº 514568816
            </DetailSubtitlePrimary>
          </DetailPolicyHeaderContainer>
          <DetailPolicyForm></DetailPolicyForm>
        </DetailPolicyRoot>
      </DashboardHomeRightRoot>
    </DashboardHomeRoot>
  );
}
