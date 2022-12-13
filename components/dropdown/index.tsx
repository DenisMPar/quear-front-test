import { useState } from "react";
import { StyledArrow } from "../../ui/icons";
import { TextBox } from "../../ui/text-box/styled";
import {
  ArrowContainer,
  ArrowContainerMobile,
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
          <StyledArrow width="38px" height="38px" />
        </ArrowContainer>
        <ArrowContainerMobile
          style={{ transform: open ? "" : "rotate(180deg)" }}
        >
          <StyledArrow width="20px" height="20px" />
        </ArrowContainerMobile>
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
