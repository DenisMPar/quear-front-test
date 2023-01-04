import { SelectOption } from "@mui/base/SelectUnstyled";
import { CustomSelect } from "./custom";
import { StyledOption } from "./styled";

interface Props {
  variant: "dashboard" | "app";
  values: string[];
  placeHolder: string;
  onChange: (prp?: any) => any;
  width?: string;
  className?: string;
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
    <CustomSelect
      className={props.className}
      width={props.width}
      icon={props.variant == "dashboard"}
      onChange={props.onChange}
      renderValue={renderValue}
    >
      {renderOptions()}
    </CustomSelect>
  );
}
