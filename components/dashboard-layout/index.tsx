import { DashboardSidebar } from "../dashboard-sidebar";
import { DashboardHeader } from "../header/dashboard-header";
import { DashboardHomeRightRoot, DashboardHomeRoot } from "./styled";

type Props = {
  children?: React.ReactNode;
};

export const DashboardLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <DashboardHomeRoot>
      <DashboardSidebar />
      <DashboardHomeRightRoot>
        <DashboardHeader />
        {children}
      </DashboardHomeRightRoot>
    </DashboardHomeRoot>
  );
};
