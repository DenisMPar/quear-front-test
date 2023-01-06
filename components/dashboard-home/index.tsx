import { DashboardHeader } from "../header/dashboard-header";
import { DashboardMensajes } from "./messages";
import { DashboardPolizas } from "./policies";
import { DashboardSidebar } from "../dashboard-sidebar";
import { DashboardUsuarios } from "./users";
import { DashboardHomeRightRoot, DashboardHomeRoot } from "./styled";
import { getPath } from "../../lib/functions";

export function DashboardHome() {
  const path = getPath();

  return (
    <DashboardHomeRoot>
      <DashboardSidebar />
      <DashboardHomeRightRoot>
        <DashboardHeader />
        {path === "/dashboard/polizas" && <DashboardPolizas />}
        {path === "/dashboard/mensajes" && <DashboardMensajes />}
        {path === "/dashboard/usuarios" && <DashboardUsuarios />}
      </DashboardHomeRightRoot>
    </DashboardHomeRoot>
  );
}
