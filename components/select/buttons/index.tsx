import { ReactNode } from "react";
import { ButtonBig } from "../../../ui/buttons/styled";
import { SelectButtonRoot } from "./styled";

type Values = {
  icon?: ReactNode;
  value: string | boolean;
  text: string;
};

interface Props {
  values: Values[];
  handleSelect?: (key: string, value: any) => void;
  onChange?: (pros: any) => any;
  selectKey: string;
  horizontal?: boolean;
}
export function SelectButtonsComponent(props: Props) {
  function handleClick(key: any, value: any) {
    if (props.handleSelect) {
      props.handleSelect(key, value);
    }
    if (props.onChange) {
      props.onChange(value);
    }
  }
  return (
    <SelectButtonRoot horizontal={props.horizontal}>
      {props.values.map((values, index) => {
        return (
          <ButtonBig
            onClick={() => handleClick(props.selectKey, values.value)}
            key={index}
          >
            {values.icon ? values.icon : null}
            {values.text}
          </ButtonBig>
        );
      })}
    </SelectButtonRoot>
  );
}
