import { Autocomplete } from "@mui/material";
import { useState } from "react";
import {
  PaperStyled,
  PopperStyled,
  StyledInput,
  StyledLi,
  StyledTextField,
} from "./styled";

interface Props {
  values: string[];
  placeHolder: string;
  onChange: (prp?: any) => any;
}

export function SelectComponent(props: Props) {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Autocomplete
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
        props.onChange(newValue);
      }}
      PaperComponent={PaperStyled}
      PopperComponent={PopperStyled}
      id="Autocomplete"
      options={props.values}
      sx={{ width: "100%", maxWidth: "320px", color: "var(--primary)" }}
      renderInput={(params) => (
        <StyledTextField ref={params.InputProps.ref}>
          <StyledInput
            type="text"
            placeholder={props.placeHolder}
            {...params.inputProps}
          />
        </StyledTextField>
      )}
      renderOption={(props, option) => <StyledLi {...props}>{option}</StyledLi>}
    />
  );
}
