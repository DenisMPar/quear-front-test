import { useState } from "react";
import { TextButton } from "../../../ui/buttons/styled";
import { StyledArrow } from "../../../ui/icons";
import { ArrowContainer, ArrowContainerMobile } from "../styled";
import {
  DropDownGroupedButtonContainer,
  DropDownGroupedContentContainer,
  DropDownGroupedHeaderTitle,
  DropDownGroupedRoot,
  DropDownGroupedTitle,
  DropDownGroupedTitleContainer,
  DropDownGroupedValue,
} from "./styled";
interface Props {
  title: string;
  content: Array<{ title: string; value: string | boolean }>;
  buttonValue: string;
}
export function DropDownGroupedComponent(props: Props) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }
  return (
    <DropDownGroupedRoot shadow={open}>
      <DropDownGroupedTitleContainer shadow={!open} onClick={toggle}>
        <DropDownGroupedHeaderTitle>{props.title}</DropDownGroupedHeaderTitle>
        <ArrowContainer style={{ transform: open ? "" : "rotate(180deg)" }}>
          <StyledArrow width="38px" height="38px" />
        </ArrowContainer>
        <ArrowContainerMobile
          style={{ transform: open ? "" : "rotate(180deg)" }}
        >
          <StyledArrow width="20px" height="20px" />
        </ArrowContainerMobile>
      </DropDownGroupedTitleContainer>
      <DropDownGroupedContentContainer
        shadow
        style={{ display: open ? "block" : "none" }}
      >
        {props.content.map((el) => {
          return (
            <div key={el.title}>
              <DropDownGroupedTitle>{el.title}</DropDownGroupedTitle>
              <DropDownGroupedValue>{el.value}</DropDownGroupedValue>
              <hr style={{ margin: "6px 0" }} />
            </div>
          );
        })}
        <DropDownGroupedButtonContainer>
          <TextButton onClick={() => console.log("click")} color="dark-ligth">
            {props.buttonValue}
          </TextButton>
        </DropDownGroupedButtonContainer>
      </DropDownGroupedContentContainer>
    </DropDownGroupedRoot>
  );
}
