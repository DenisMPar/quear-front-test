import OptionGroupUnstyled, {
  OptionGroupUnstyledProps,
} from "@mui/base/OptionGroupUnstyled";
import SelectUnstyled, {
  SelectOption,
  SelectUnstyledProps,
} from "@mui/base/SelectUnstyled";
import * as React from "react";
import {
  StyledButton,
  StyledGroupHeader,
  StyledGroupOptions,
  StyledGroupRoot,
  StyledLine,
  StyledListbox,
  StyledOption,
  StyledPopper,
} from "../styled";

function CustomSelect(props: SelectUnstyledProps<string>) {
  const slots: SelectUnstyledProps<string>["slots"] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} slots={slots} />;
}
const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
  props: OptionGroupUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  const slots: OptionGroupUnstyledProps["slots"] = {
    root: StyledGroupRoot,
    label: StyledGroupHeader,
    list: StyledGroupOptions,
    ...props.slots,
  };

  return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
});

interface Props {
  values: Array<{ title: string; options: string[] }>;
  placeHolder: string;
  onChange: (props?: any) => any;
}

export function SelectGroupedComponent(props: Props) {
  function renderGroups() {
    return props.values.map((el, index) => {
      return (
        <>
          <CustomOptionGroup key={el.title} label={el.title}>
            {el.options.map((el) => {
              return (
                <StyledOption key={el} value={el}>
                  {el}
                </StyledOption>
              );
            })}
          </CustomOptionGroup>
          {index < props.values.length - 1 ? <StyledLine /> : null}
        </>
      );
    });
  }

  function renderValue(option: SelectOption<string> | null) {
    if (option == null) {
      return <span>{props.placeHolder}</span>;
    }

    return <span>{option.label}</span>;
  }
  return (
    <CustomSelect onChange={props.onChange} renderValue={renderValue}>
      {renderGroups()}
    </CustomSelect>
  );
}
