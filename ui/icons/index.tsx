import styled from "@emotion/styled";
import { InfoSVGIcon } from "./svg/info-icon";
import { CameraSwitchSVGIcon } from "./svg/camera-switch-icon";
import { OpenCameraSVGIcon } from "./svg/open-camera-icon";
import { CameraSVGIcon } from "./svg/camera-icon";
import { CreditCardSVGIcon } from "./svg/credit-card-icon";
import { UserSVGIcon } from "./svg/user-icon";
import { CalendarSVGIcon } from "./svg/calendar-icon";
import { LockSVGIcon } from "./svg/lock-icon";
import { CheckRoundedSVGIcon } from "./svg/check-rounded-icon";
import { CloseSVGIcon } from "./svg/close-icon";
import { UncheckedBoxSVGIcon } from "./svg/unchecked-box-icon";
import { CheckedBoxSVGIcon } from "./svg/checked-box-icon";

interface Props {
  color: "primary" | "secondary";
  small?: boolean;
}
const Info = styled(InfoSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledInfo = ({ color }: Props) => {
  return <Info color={color}></Info>;
};
const CameraSwitch = styled(CameraSwitchSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledCameraSwitch = ({ color }: Props) => {
  return <CameraSwitch color={color}></CameraSwitch>;
};
const OpenCamera = styled(OpenCameraSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledOpenCamera = ({ color }: Props) => {
  return <OpenCamera color={color}></OpenCamera>;
};
const Camera = styled(CameraSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledCamera = ({ color }: Props) => {
  return <Camera color={color}></Camera>;
};
const CreditCard = styled(CreditCardSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledCreditCard = ({ color }: Props) => {
  return <CreditCard color={color}></CreditCard>;
};
const User = styled(UserSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledUser = ({ color }: Props) => {
  return <User color={color}></User>;
};
const Calendar = styled(CalendarSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledCalendar = ({ color }: Props) => {
  return <Calendar color={color}></Calendar>;
};
const Lock = styled(LockSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledLock = ({ color }: Props) => {
  return <Lock color={color}></Lock>;
};
const CheckRounded = styled(CheckRoundedSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledCheckRounded = ({ color }: Props) => {
  return <CheckRounded color={color}></CheckRounded>;
};
const Close = styled(CloseSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledClose = ({ color }: Props) => {
  return <Close color={color}></Close>;
};
const UncheckedBox = styled(UncheckedBoxSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledUncheckedBox = ({ color }: Props) => {
  return <UncheckedBox color={color}></UncheckedBox>;
};
const CheckedBox = styled(CheckedBoxSVGIcon)`
  width: 24px;
  height: 24px;
  fill: ${(props) => `var(--${props.color})`};
`;
export const StyledCheckedBox = ({ color }: Props) => {
  return <CheckedBox color={color}></CheckedBox>;
};
