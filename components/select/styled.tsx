import styled from "@emotion/styled";

import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { Popper } from "@mui/material";

export const StyledSelect = styled(SelectUnstyled)`
  background-color: var(--bg);
  box-shadow: 0px 4px 4px var(--shadow);
`;

export const StyledOption = styled(OptionUnstyled)`
  width: 100%;
  list-style: none;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  &:last-of-type {
    border-bottom: none;
  }
  &.${optionUnstyledClasses.selected} {
    background-color: none;
    color: var(--primary);
  }
  &.${optionUnstyledClasses.highlighted} {
    background-color: none;
    color: var(--bg-secondary);
  }
  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: none;
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
  height: 1px;
  background-color: var(--primary);
  border: none;
`;
