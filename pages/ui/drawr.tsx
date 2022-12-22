import { NextPage } from "next";
import { StepsDrawer } from "../../components/steps-drawer";

const Drawer: NextPage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "var(--secondary)" }}>
      <StepsDrawer />
    </div>
  );
};

export default Drawer;
