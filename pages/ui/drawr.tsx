import { NextPage } from "next";
import SwipeableEdgeDrawer from "../../components/steps-menu";

const Drawer: NextPage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "blue" }}>
      <SwipeableEdgeDrawer />
    </div>
  );
};

export default Drawer;
