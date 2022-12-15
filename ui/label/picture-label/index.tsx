import { ReactNode } from "react";
import { StyledCloseRounded } from "../../icons";
import { ContainerLabel, Label } from "../styled";
import { PictureLabelCloseContainer, PictureLabelRoot } from "./styled";

interface Props {
  label?: string;
  onClose: (params: any) => any;
  children: ReactNode;
}

export function PictureLabel(props: Props) {
  return (
    <PictureLabelRoot>
      <PictureLabelCloseContainer onClick={props.onClose}>
        <StyledCloseRounded width="24px" height="24px" color="dark-ligth" />
      </PictureLabelCloseContainer>
      {props.children}
      <ContainerLabel>
        <Label>{props.label}</Label>
      </ContainerLabel>
    </PictureLabelRoot>
  );
}
