import { ReactNode } from "react";
import { StyledPlus } from "../../icons";
import { Label, ContainerLabel } from "../styled";
import { AddLabelRoot } from "./styled";

interface Props {
  label?: string;
  type: "small" | "big";
  children: ReactNode;
  className?: string;
}

export function AddLabel(props: Props) {
  return (
    <AddLabelRoot className={props.className} type={props.type}>
      <StyledPlus />
      {props.children}
      {props.label ? (
        <ContainerLabel>
          <Label>{props.label}</Label>
        </ContainerLabel>
      ) : null}
    </AddLabelRoot>
  );
}
