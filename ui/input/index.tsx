import { jsx } from "@emotion/react";
import { IconProps } from "@mui/material";
import { ComponentType } from "react";
import { JsxElement } from "typescript";
import { InputWithIconStyled, InputWithIconRoot } from "./styled";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  Icon: any;
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
