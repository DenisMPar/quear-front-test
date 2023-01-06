import { forwardRef, useState } from "react";
import { StyledEyeUnColored, StyledPasswordHide } from "../icons";
import {
  InputPasswordContainerIcon,
  InputWithIconRoot,
  InputWithIconStyled,
  InputWithIconStyledBig,
} from "./styled";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  Icon?: any;
  ref?: any;
}

export const InputWithIcon = (props: Props) => {
  const { Icon } = props;
  return (
    <InputWithIconRoot>
      <Icon />
      <InputWithIconStyled
        onChange={props.onChange}
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
        {showPassword ? (
          <StyledEyeUnColored color="dark-ligth" />
        ) : (
          <StyledPasswordHide color="dark-ligth" />
        )}
      </InputPasswordContainerIcon>
    </InputWithIconRoot>
  );
};
