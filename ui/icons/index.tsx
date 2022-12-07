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
import { CloseRoundedSVGIcon } from "./svg/close-rounded-icon";
import { UncheckedBoxSVGIcon } from "./svg/unchecked-box-icon";
import { CheckedBoxSVGIcon } from "./svg/checked-box-icon";
import { QuearBigLogoSVGIcon } from "./svg/quear-big-logo";
import { QuearSmallLogoSVGIcon } from "./svg/quear-small-logo";
import { HamburguerSVGIcon } from "./svg/hamburger-icon";
import { PhoneSVGIcon } from "./svg/phone-icon";
import { CarMobileSVGIcon } from "./svg/car-logo-mobile";
import { CarThreeDoorsSVGIcon } from "./svg/car-3-doors-icon";
import { CarFourDoorsSVGIcon } from "./svg/car-4-doors-icon";
import { CarFiveDoorsSVGIcon } from "./svg/car-5-doors-icon";
import { WhatsAppSVGIcon } from "./svg/whatsapp-icon";
import { AlertSVGIcon } from "./svg/alert-icon";
import { CheckedBigSVGIcon } from "./svg/checked-big-icon";
import { SearchBigSVGIcon } from "./svg/search-big-icon";
import { TwitterSVGIcon } from "./svg/twitter.icon";
import { LinkedinSVGIcon } from "./svg/linkedin-icon";
import { InstagramSVGIcon } from "./svg/instagram-icon";
import { HomeColoredSVGIcon } from "./svg/home-icon-colored";
import { HomeUnColoredSVGIcon } from "./svg/home-icon-uncolored";
import { MoneyUnColoredSVGIcon } from "./svg/money-icon-uncolored";
import { MoneyColoredSVGIcon } from "./svg/money-icon-colored";
import { EyeUnColoredSVGIcon } from "./svg/eye-icon-uncolored";
import { EyeColoredSVGIcon } from "./svg/eye-icon-colored";
import { CloseSVGIcon } from "./svg/close-icon";
import { EditSVGIcon } from "./svg/edit-icon";
import { QuearBigLogoBlueSVGIcon } from "./svg/quear-big-logo-blue";

interface Props {
  color?: "primary" | "secondary" | "bg" | "dark-ligth";
  width?: string;
  height?: string;
}

//one color icons

const Info = styled(InfoSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledInfo = ({ color, width, height }: Props) => {
  return <Info color={color} width={width} height={height}></Info>;
};
const Alert = styled(AlertSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledAlert = ({ color, width, height }: Props) => {
  return <Alert color={color} width={width} height={height}></Alert>;
};
const CameraSwitch = styled(CameraSwitchSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCameraSwitch = ({ color, width, height }: Props) => {
  return (
    <CameraSwitch color={color} width={width} height={height}></CameraSwitch>
  );
};
const OpenCamera = styled(OpenCameraSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledOpenCamera = ({ color, width, height }: Props) => {
  return <OpenCamera color={color} width={width} height={height}></OpenCamera>;
};
const Camera = styled(CameraSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCamera = ({ color, width, height }: Props) => {
  return <Camera color={color} width={width} height={height}></Camera>;
};

const CheckRounded = styled(CheckRoundedSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCheckRounded = ({ color, width, height }: Props) => {
  return (
    <CheckRounded color={color} width={width} height={height}></CheckRounded>
  );
};
const CloseRounded = styled(CloseRoundedSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCloseRounded = ({ color, width, height }: Props) => {
  return (
    <CloseRounded color={color} width={width} height={height}></CloseRounded>
  );
};
const Close = styled(CloseSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledClose = ({ color, width, height }: Props) => {
  return <Close color={color} width={width} height={height}></Close>;
};
const UncheckedBox = styled(UncheckedBoxSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledUncheckedBox = ({ color, width, height }: Props) => {
  return (
    <UncheckedBox color={color} width={width} height={height}></UncheckedBox>
  );
};
const CheckedBox = styled(CheckedBoxSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCheckedBox = ({ color, width, height }: Props) => {
  return <CheckedBox color={color} width={width} height={height}></CheckedBox>;
};
const Phone = styled(PhoneSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledPhone = ({ color, width, height }: Props) => {
  return <Phone color={color} width={width} height={height}></Phone>;
};
const Edit = styled(EditSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledEdit = ({ color, width, height }: Props) => {
  return <Edit color={color} width={width} height={height}></Edit>;
};
const WhatsApp = styled(WhatsAppSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledWhatsApp = ({ color, width, height }: Props) => {
  return <WhatsApp color={color} width={width} height={height}></WhatsApp>;
};
const Twitter = styled(TwitterSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledTwitter = ({ color, width, height }: Props) => {
  return <Twitter color={color} width={width} height={height}></Twitter>;
};
const Linkedin = styled(LinkedinSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledLinkedin = ({ color, width, height }: Props) => {
  return <Linkedin color={color} width={width} height={height}></Linkedin>;
};
const Instagram = styled(InstagramSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledInstagram = ({ color, width, height }: Props) => {
  return <Instagram color={color} width={width} height={height}></Instagram>;
};

//two colors (can change one part color)

const EyeColored = styled(EyeColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledEyeColored = ({ color, width, height }: Props) => {
  return <EyeColored color={color} width={width} height={height}></EyeColored>;
};

const HomeColored = styled(HomeColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledHomeColored = ({ color, width, height }: Props) => {
  return (
    <HomeColored color={color} width={width} height={height}></HomeColored>
  );
};

const MoneyColored = styled(MoneyColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledMoneyColored = ({ color, width, height }: Props) => {
  return (
    <MoneyColored color={color} width={width} height={height}></MoneyColored>
  );
};
//two colors icons (can't change color with props)

const User = styled(UserSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledUser = ({ width, height }: Props) => {
  return <User width={width} height={height}></User>;
};

const CreditCard = styled(CreditCardSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledCreditCard = ({ width, height }: Props) => {
  return <CreditCard width={width} height={height}></CreditCard>;
};

const Calendar = styled(CalendarSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledCalendar = ({ width, height }: Props) => {
  return <Calendar width={width} height={height}></Calendar>;
};
const Lock = styled(LockSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledLock = ({ width, height }: Props) => {
  return <Lock width={width} height={height}></Lock>;
};
const SearchBig = styled(SearchBigSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledSearchBig = ({ width, height }: Props) => {
  return <SearchBig width={width} height={height}></SearchBig>;
};

const HomeUnColored = styled(HomeUnColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledHomeUnColored = ({ width, height }: Props) => {
  return <HomeUnColored width={width} height={height}></HomeUnColored>;
};
const MoneyUnColored = styled(MoneyUnColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledMoneyUnColored = ({ width, height }: Props) => {
  return <MoneyUnColored width={width} height={height}></MoneyUnColored>;
};

const EyeUnColored = styled(EyeUnColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledEyeUnColored = ({ width, height }: Props) => {
  return <EyeUnColored width={width} height={height}></EyeUnColored>;
};

const Hamburguer = styled(HamburguerSVGIcon)`
  width: 20px;
  height: 14px;
`;
export const StyledHamburguer = () => {
  return <Hamburguer></Hamburguer>;
};

//can't modify color or size
export const StyledQuearBigLogo = () => {
  return <QuearBigLogoSVGIcon></QuearBigLogoSVGIcon>;
};
export const StyledQuearBigLogoBlue = () => {
  return <QuearBigLogoBlueSVGIcon></QuearBigLogoBlueSVGIcon>;
};
export const StyledQuearSmallLogo = () => {
  return <QuearSmallLogoSVGIcon></QuearSmallLogoSVGIcon>;
};

export const StyledCarMobile = () => {
  return <CarMobileSVGIcon></CarMobileSVGIcon>;
};
export const StyledCarThreeDoors = () => {
  return <CarThreeDoorsSVGIcon></CarThreeDoorsSVGIcon>;
};
export const StyledCarFourDoors = () => {
  return <CarFourDoorsSVGIcon></CarFourDoorsSVGIcon>;
};
export const StyledCarFiveDoors = () => {
  return <CarFiveDoorsSVGIcon></CarFiveDoorsSVGIcon>;
};
export const StyledCheckedBig = () => {
  return <CheckedBigSVGIcon></CheckedBigSVGIcon>;
};
