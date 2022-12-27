import { ReactNode, useState } from "react";
import { ButtonBig } from "../../../ui/buttons/styled";
import { SelectButtonRoot, SelectStyledButton } from "./styled";

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
  const [selected, setSelected] = useState<number | null>(null);
  function handleClick(key: any, value: any, index: number) {
    setSelected(index);
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
          <SelectStyledButton
            selected={selected == index}
            onClick={() => handleClick(props.selectKey, values.value, index)}
            key={index}
          >
            {values.icon ? values.icon : null}
            {values.text}
          </SelectStyledButton>
        );
      })}
    </SelectButtonRoot>
  );
}
