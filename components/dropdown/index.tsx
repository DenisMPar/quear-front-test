import { useState } from "react";
import { StyledArrow } from "../../ui/icons";
import { TextBox } from "../../ui/text-box/styled";
import {
  ArrowContainer,
  DropDownContentContainer,
  DropDownRoot,
  DropDownTitle,
  DropDownTitleContainer,
} from "./styled";

interface Props {
  title: string;
  content: string;
}
export function DropDownComp(props: Props) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }
  return (
    <DropDownRoot>
      <DropDownTitleContainer onClick={toggle}>
        <DropDownTitle>{props.title}</DropDownTitle>
        <ArrowContainer style={{ transform: open ? "" : "rotate(180deg)" }}>
          <StyledArrow width="20px" height="20px" />
        </ArrowContainer>
      </DropDownTitleContainer>
      <DropDownContentContainer
        shadow
        style={{ display: open ? "block" : "none" }}
      >
        {props.content}
      </DropDownContentContainer>
    </DropDownRoot>
  );
}
