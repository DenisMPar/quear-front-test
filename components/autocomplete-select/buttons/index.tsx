import { ReactNode } from "react";
import { ButtonBig } from "../../../ui/buttons/styled";
import { SelectButtonRoot } from "./styled";

type Values = {
  icon?: ReactNode;
  value: string | boolean;
  text: string;
  active?: boolean;
};

interface Props {
  values: Values[];
  handleSelect?: (key: string, value: any) => void;
  onChange?: (pros: any) => any;
  selectKey: string;
  horizontal?: boolean;
  type: "button" | "submit";
}
export function SelectButtonsComponent(props: Props) {
  function handleClick(key: any, value: any, index: number) {
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
            type={props.type}
            active={values.active}
            onClick={() => handleClick(props.selectKey, values.value, index)}
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
