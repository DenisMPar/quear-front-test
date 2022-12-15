import styled from "@emotion/styled";

import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";

export const StyledSelect = styled(SelectUnstyled)`
  background-color: var(--bg);
  box-shadow: 0px 4px 4px var(--shadow);
`;

export const StyledButton = styled("button")`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
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

export const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  padding: 4px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: var(--terciary);
    color: var(--terciary);
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: var(--bg-secondary);
    color: var(--bg-secondary);
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: var(--terciary);
    color: var(--primary);
  }

  &.${optionUnstyledClasses.disabled} {
    color: var(--primary);
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: var(--bg-secondary);
    color: var(--primary);
  }
`;

export const StyledGroupRoot = styled("li")`
  list-style: none;
`;

export const StyledGroupHeader = styled("span")`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05rem;
  color: var(--primary);
`;

export const StyledGroupOptions = styled("ul")`
  list-style: none;
  margin-left: 0;
  padding: 0;
  padding-bottom: 8px;

  > li {
    padding-left: 20px;
  }
`;
export const StyledLine = styled.hr`
  margin: 0;
  margin-top: 16px;
  height: 1px;
  background-color: var(--primary);
  border: none;
`;

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
