import { jsx } from "@emotion/react";
import { IconProps } from "@mui/material";
import { ComponentType, useState } from "react";
import { JsxElement } from "typescript";
import { StyledPasswordHide } from "../icons";
import {
  InputWithIconStyled,
  InputWithIconRoot,
  InputOutlined,
  InputPasswordContainerIcon,
  InputWithIconStyledBig,
} from "./styled";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  Icon?: any;
}

export const InputWithIcon = (props: Props) => {
  const { Icon } = props;
  return (
    <InputWithIconRoot>
      <Icon />
      <InputWithIconStyled
        placeholder={props.placeholder}
        name={props.name}
      ></InputWithIconStyled>
    </InputWithIconRoot>
  );
};
export const InputPassword = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <InputWithIconRoot>
      <InputWithIconStyledBig
        placeholder={props.placeholder}
        name={props.name}
        type={showPassword ? "text" : "password"}
      ></InputWithIconStyledBig>
      <InputPasswordContainerIcon onClick={togglePassword}>
        <StyledPasswordHide color="dark-ligth" />
      </InputPasswordContainerIcon>
    </InputWithIconRoot>
  );
};
