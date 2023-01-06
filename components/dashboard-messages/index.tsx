import Link from "next/link";
import {
  DashboardPolizasHeaderContainer,
  DashboardPolizasRoot,
  SubtitleDashboardPrimary,
  SubtitleDashboardSecondary,
} from "./styled";

export function DashboardMessages() {
  return (
    <DashboardPolizasRoot>
      <DashboardPolizasHeaderContainer>
        <SubtitleDashboardPrimary>Hola Federico!</SubtitleDashboardPrimary>
        <Link href="/dashboard/polizas">
          <SubtitleDashboardSecondary>Pólizas</SubtitleDashboardSecondary>
        </Link>
        <Link href="/dashboard/mensajes">
          <SubtitleDashboardSecondary active={true}>
            Mensajes
          </SubtitleDashboardSecondary>
        </Link>
      </DashboardPolizasHeaderContainer>
    </DashboardPolizasRoot>
  );
}
