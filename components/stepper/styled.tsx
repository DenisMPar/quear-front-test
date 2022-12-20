import styled from "@emotion/styled";
import { CheckRoundedSVGIcon } from "../../ui/icons/svg/check-rounded-icon";

export const CheckRoundedStepper = styled(CheckRoundedSVGIcon)`
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  fill: inherit;
`;
