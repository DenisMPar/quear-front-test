import Autocomplete from "@mui/material/Autocomplete";
import {
  PaperStyled,
  PopperStyled,
  StyledInput,
  StyledTextField,
} from "../styled";
import { GroupHeader, GroupItems } from "./styled";

interface Props {
  values: Array<{ title: string; options: string[] }>;
  placeHolder?: string;
  onChange: (props?: any) => any;
  handleSelect: (key: string, value: any) => void;
  selectKey: string;
}

export function AutocompleteGroupedComponent(props: Props) {
  //crate a new object with first letter capitalized and a key first letter to sort later
  const options = props.values.map((option) => {
    let title = option.title;
    return option.options.map((option) => {
      const firstLetter = option[0]?.toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        option,
        group: title,
      };
    });
  });
  //sort the options
  options.map((el) => {
    return el.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter));
  });
  //concat both categories "mas buscadas" and "todas las marcas"
  //One array is better for the options prop in autocomplete
  const optionsPopular = options[0];
  const optionsConcated = optionsPopular.concat(options[1]);

  return (
    <Autocomplete
      loading={props.values[0].options.length == 0}
      onChange={(
        event: any,
        newValue: {
          firstLetter: string;
          option: string;
          group: string;
        } | null
      ) => {
        props.onChange(newValue);
        props.handleSelect(props.selectKey, newValue?.option);
      }}
      PaperComponent={PaperStyled}
      PopperComponent={PopperStyled}
      id="grouped-demo"
      options={optionsConcated}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.option}
      isOptionEqualToValue={(option, value) => {
        return option.option == value.option;
      }}
      sx={{ width: "100%", maxWidth: "600px" }}
      renderInput={(params) => (
        <StyledTextField ref={params.InputProps.ref}>
          <StyledInput
            placeholder={props.placeHolder}
            type="text"
            {...params.inputProps}
          />
        </StyledTextField>
      )}
      renderGroup={(params) => {
        return (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        );
      }}
    />
  );
}
