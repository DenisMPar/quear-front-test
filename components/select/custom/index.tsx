import SelectUnstyled, {
  selectUnstyledClasses,
  SelectUnstyledProps,
  SelectUnstyledRootSlotProps,
  SelectUnstyledPopperSlotProps,
} from "@mui/base/SelectUnstyled";
import { width } from "@mui/system";
import { forwardRef } from "react";
import {
  StyledButton,
  StyledButtonWitIcon,
  StyledListbox,
  StyledListboxWithArrow,
  StyledPopper,
} from "./styled";

interface Props extends SelectUnstyledProps<string> {
  icon?: boolean;
  width?: string;
}

export function CustomSelect(props: Props) {
  const { width } = props;

  const Popper = forwardRef(function PopperUnstyled<TValue extends {}>(
    props: SelectUnstyledPopperSlotProps<TValue>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    const { ownerState, ...other } = props;
    return <StyledPopper width={width} {...other} ref={ref} />;
  });

  const slots: SelectUnstyledProps<string>["slots"] = {
    root: props.icon ? StyledButtonWitIcon : StyledButton,
    listbox: props.icon ? StyledListboxWithArrow : StyledListbox,
    popper: Popper as any,
    ...props.slots,
  };

  return <SelectUnstyled {...props} slots={slots} />;
}
