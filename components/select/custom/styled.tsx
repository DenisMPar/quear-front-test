import styled from "@emotion/styled";

import { selectUnstyledClasses } from "@mui/base/SelectUnstyled";
import { Popper } from "@mui/material";

export const StyledButtonWitIcon = styled("button")`
  width: 100%;
  border: 1px solid var(--shadow);
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  /* min-width: 320px; */
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: var(--bg);
  color: var(--dark-ligth);
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  &.${selectUnstyledClasses.focusVisible} {
    border-color: blue;
    outline: 3px solid blue;
  }
  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: "▴";
    }
  }

  &::after {
    content: "▾";
    float: right;
  }
`;
export const StyledListboxWithArrow = styled("ul")`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--shadow);
  font-family: inherit;
  font-size: 16px;
  box-sizing: border-box;
  padding: 12px 12px;
  /* min-width: 320px; */
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: var(--bg);
  color: var(--primary);
`;

export const StyledButton = styled("button")`
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  /* min-width: 320px; */
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: var(--bg);
  border: none;
  color: var(--dark-ligth);
  box-shadow: 0px 4px 4px var(--shadow);
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  &.${selectUnstyledClasses.focusVisible} {
    border-color: blue;
    outline: 3px solid blue;
  }
`;

export const StyledListbox = styled("ul")`
  margin: 0 auto;
  margin-top: 11px;
  width: 100%;
  max-width: 400px;
  font-family: inherit;
  font-size: 16px;
  box-sizing: border-box;
  padding: 12px 12px;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: var(--bg);
  border: none;
  color: var(--primary);
  box-shadow: 0px 4px 4px var(--shadow);
`;

export const StyledPopper = styled(Popper)`
  width: 190px;
`;
