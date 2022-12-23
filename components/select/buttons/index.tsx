import { ReactNode } from "react";
import { ButtonBig } from "../../../ui/buttons/styled";
import { SelectButtonRoot } from "./styled";

type Values = {
  icon: ReactNode;
  value: string;
  text: string;
};

interface Props {
  values: Values[];
  handleSelect: (key: string, value: any) => void;
  selectKey: string;
}
export function SelectButtonsComponent(props: Props) {
  return (
    <SelectButtonRoot>
      {props.values.map((values, index) => {
        return (
          <ButtonBig
            onClick={() => props.handleSelect(props.selectKey, values.value)}
            key={index}
          >
            {values.icon}
            {values.text}
          </ButtonBig>
        );
      })}
    </SelectButtonRoot>
  );
}
