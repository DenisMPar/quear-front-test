import SelectUnstyled, {
  SelectOption,
  SelectUnstyledProps,
} from "@mui/base/SelectUnstyled";
import {
  StyledButton,
  StyledListbox,
  StyledOption,
  StyledPopper,
} from "./styled";

function CustomSelect(props: SelectUnstyledProps<string>) {
  const slots: SelectUnstyledProps<string>["slots"] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} slots={slots} />;
}

interface Props {
  values: string[];
  placeHolder: string;
  onChange: (prp?: any) => any;
}

export function SelectComponent(props: Props) {
  function renderOptions() {
    return props.values.map((el) => {
      return (
        <StyledOption key={el} value={el}>
          {el}
        </StyledOption>
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
      {renderOptions()}
    </CustomSelect>
  );
}
