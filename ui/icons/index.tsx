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
import { ArrowSVGIcon } from "./svg/arrow-icon";
import { CarDesktopSVGIcon } from "./svg/car-logo-desktop";
import { PlusSVGIcon } from "./svg/plus-icon";
import { PasswordHideSVGIcon } from "./svg/password-hide-icon";
import { BulletSVGIcon } from "./svg/bullet-icon";
import { MailSVGIcon } from "./svg/mail-icon";
import { BellSVGIcon } from "./svg/bell-icon";
import { CheckedSVGIcon } from "./svg/checked-icon";

export interface IconsProps {
  color?:
    | "primary"
    | "secondary"
    | "terciary"
    | "bg"
    | "bg-terciary"
    | "dark-ligth";
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
export const StyledInfo = ({ color, width, height }: IconsProps) => {
  return <Info color={color} width={width} height={height}></Info>;
};

const Alert = styled(AlertSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledAlert = ({ color, width, height }: IconsProps) => {
  return <Alert color={color} width={width} height={height}></Alert>;
};

const CameraSwitch = styled(CameraSwitchSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCameraSwitch = ({ color, width, height }: IconsProps) => {
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
export const StyledOpenCamera = ({ color, width, height }: IconsProps) => {
  return <OpenCamera color={color} width={width} height={height}></OpenCamera>;
};

const Camera = styled(CameraSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCamera = ({ color, width, height }: IconsProps) => {
  return <Camera color={color} width={width} height={height}></Camera>;
};

const CheckRounded = styled(CheckRoundedSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledCheckRounded = ({ color, width, height }: IconsProps) => {
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
export const StyledCloseRounded = ({ color, width, height }: IconsProps) => {
  return (
    <CloseRounded color={color} width={width} height={height}></CloseRounded>
  );
};

const Close = styled(CloseSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
  cursor: pointer;
`;
export const StyledClose = ({ color, width, height }: IconsProps) => {
  return <Close color={color} width={width} height={height}></Close>;
};

const UncheckedBox = styled(UncheckedBoxSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledUncheckedBox = ({ color, width, height }: IconsProps) => {
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
export const StyledCheckedBox = ({ color, width, height }: IconsProps) => {
  return <CheckedBox color={color} width={width} height={height}></CheckedBox>;
};

const Phone = styled(PhoneSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledPhone = ({ color, width, height }: IconsProps) => {
  return <Phone color={color} width={width} height={height}></Phone>;
};
const Mail = styled(MailSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledMail = ({ color, width, height }: IconsProps) => {
  return <Mail color={color} width={width} height={height}></Mail>;
};

const Edit = styled(EditSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledEdit = ({ color, width, height }: IconsProps) => {
  return <Edit color={color} width={width} height={height}></Edit>;
};

const WhatsApp = styled(WhatsAppSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledWhatsApp = ({ color, width, height }: IconsProps) => {
  return <WhatsApp color={color} width={width} height={height}></WhatsApp>;
};

const Twitter = styled(TwitterSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
  cursor: pointer;
`;
export const StyledTwitter = ({ color, width, height }: IconsProps) => {
  return <Twitter color={color} width={width} height={height}></Twitter>;
};

const Linkedin = styled(LinkedinSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
  cursor: pointer;
`;
export const StyledLinkedin = ({ color, width, height }: IconsProps) => {
  return <Linkedin color={color} width={width} height={height}></Linkedin>;
};

const Instagram = styled(InstagramSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
  cursor: pointer;
`;
export const StyledInstagram = ({ color, width, height }: IconsProps) => {
  return <Instagram color={color} width={width} height={height}></Instagram>;
};
const Arrow = styled(ArrowSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledArrow = ({ color, width, height }: IconsProps) => {
  return <Arrow color={color} width={width} height={height}></Arrow>;
};
const Plus = styled(PlusSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledPlus = ({ color, width, height }: IconsProps) => {
  return <Plus color={color} width={width} height={height}></Plus>;
};
const PasswordHide = styled(PasswordHideSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledPasswordHide = ({ color, width, height }: IconsProps) => {
  return (
    <PasswordHide color={color} width={width} height={height}></PasswordHide>
  );
};
const Bullet = styled(BulletSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledBullet = ({ color, width, height }: IconsProps) => {
  return <Bullet color={color} width={width} height={height}></Bullet>;
};
const Checked = styled(CheckedSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledChecked = ({ color, width, height }: IconsProps) => {
  return <Checked color={color} width={width} height={height}></Checked>;
};

//two colors icons (can change one color)

const EyeColored = styled(EyeColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledEyeColored = ({ color, width, height }: IconsProps) => {
  return <EyeColored color={color} width={width} height={height}></EyeColored>;
};

const HomeColored = styled(HomeColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledHomeColored = ({ color, width, height }: IconsProps) => {
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
export const StyledMoneyColored = ({ color, width, height }: IconsProps) => {
  return (
    <MoneyColored color={color} width={width} height={height}></MoneyColored>
  );
};
const HomeUnColored = styled(HomeUnColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledHomeUnColored = ({ color, width, height }: IconsProps) => {
  return (
    <HomeUnColored color={color} width={width} height={height}></HomeUnColored>
  );
};
const MoneyUnColored = styled(MoneyUnColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledMoneyUnColored = ({ color, width, height }: IconsProps) => {
  return (
    <MoneyUnColored
      color={color}
      width={width}
      height={height}
    ></MoneyUnColored>
  );
};
const EyeUnColored = styled(EyeUnColoredSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledEyeUnColored = ({ color, width, height }: IconsProps) => {
  return (
    <EyeUnColored color={color} width={width} height={height}></EyeUnColored>
  );
};

//two colors icons (can't change color with props)

const User = styled(UserSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--primary)`};
`;
export const StyledUser = ({ width, height, color }: IconsProps) => {
  return <User width={width} height={height} color={color}></User>;
};

const Bell = styled(BellSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledBell = ({ width, height }: IconsProps) => {
  return <Bell width={width} height={height}></Bell>;
};

const CreditCard = styled(CreditCardSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledCreditCard = ({ width, height }: IconsProps) => {
  return <CreditCard width={width} height={height}></CreditCard>;
};

const Calendar = styled(CalendarSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledCalendar = ({ width, height }: IconsProps) => {
  return <Calendar width={width} height={height}></Calendar>;
};

const Lock = styled(LockSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledLock = ({ width, height }: IconsProps) => {
  return <Lock width={width} height={height}></Lock>;
};

const SearchBig = styled(SearchBigSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledSearchBig = ({ width, height }: IconsProps) => {
  return <SearchBig width={width} height={height}></SearchBig>;
};
const QuearBigLogo = styled(QuearBigLogoSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;
export const StyledQuearBigLogo = ({ width, height }: IconsProps) => {
  return <QuearBigLogo width={width} height={height}></QuearBigLogo>;
};

const Hamburguer = styled(HamburguerSVGIcon)`
  width: 20px;
  height: 14px;
`;
export const StyledHamburguer = () => {
  return <Hamburguer></Hamburguer>;
};

//can't modify color or size

export const StyledQuearBigLogoBlue = () => {
  return <QuearBigLogoBlueSVGIcon></QuearBigLogoBlueSVGIcon>;
};

export const StyledQuearSmallLogo = () => {
  return <QuearSmallLogoSVGIcon></QuearSmallLogoSVGIcon>;
};

export const StyledCarMobile = () => {
  return <CarMobileSVGIcon></CarMobileSVGIcon>;
};
export const StyledCarDesktop = () => {
  return <CarDesktopSVGIcon></CarDesktopSVGIcon>;
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
