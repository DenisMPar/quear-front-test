import { NextPage } from "next";
import {
  StyledCalendar,
  StyledCamera,
  StyledCameraSwitch,
  StyledCheckedBox,
  StyledCheckRounded,
  StyledClose,
  StyledCreditCard,
  StyledInfo,
  StyledLock,
  StyledOpenCamera,
  StyledUncheckedBox,
  StyledUser,
} from "../ui/icons";
const Ui: NextPage = () => {
  return (
    <div>
      <h1>UI page</h1>
      <StyledInfo color="primary" />
      <StyledCameraSwitch color="primary" />
      <StyledOpenCamera color="primary" />
      <StyledCamera color="primary" />
      <StyledCreditCard color="primary" />
      <StyledUser color="primary" />
      <StyledCalendar color="primary" />
      <StyledLock color="primary" />
      <StyledCheckRounded color="primary" />
      <StyledClose color="primary" />
      <StyledUncheckedBox color="primary" />
      <StyledCheckedBox color="primary" />
    </div>
  );
};
export default Ui;
