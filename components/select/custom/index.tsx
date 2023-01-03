import SelectUnstyled, { SelectUnstyledProps } from "@mui/base/SelectUnstyled";
import { Popper } from "@mui/material";
import {
  StyledButton,
  StyledButtonWitIcon,
  StyledListbox,
  StyledListboxWithArrow,
  StyledPopper,
} from "./styled";

interface Props extends SelectUnstyledProps<string> {
  icon?: boolean;
  widht?: string;
}

export function CustomSelect(props: Props) {
  // console.log(props.icon);

  const slots: SelectUnstyledProps<string>["slots"] = {
    root: props.icon ? StyledButtonWitIcon : StyledButton,
    listbox: props.icon ? StyledListboxWithArrow : StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} slots={slots} />;
}
