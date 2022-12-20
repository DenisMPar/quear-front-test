import styled from "@emotion/styled";
import { Paper, Popper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { styled as style } from "@mui/system";
import { useState } from "react";

const GroupHeader = style("div")(({ theme }) => ({
  fontFamily: "Nunito",
  background: "var(--bg)",
  fontSize: "18px",
  fontWeight: "700",
  top: "-8px",
  padding: "12px 21px",
  color: "var(--primary)",
}));

const StyledTextField = styled.div`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: var(--bg);
  border: none;
  color: var(--dark-ligth);
  box-shadow: 0px 4px 4px var(--shadow);
  cursor: pointer;
`;
const StyledInput = styled.input`
  font-family: inherit;
  color: var(--dark-ligth);
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
const GroupItems = style("ul")({
  padding: "0 5px",
  fontFamily: "Nunito",
  color: "var(--primary)",
});
const PaperStyled = styled(Paper)`
  box-shadow: 0px 4px 4px var(--shadow);
  border-radius: 12px;
`;
const PopperStyled = styled(Popper)`
  box-shadow: 0px 4px 4px var(--shadow);
  border-radius: 12px;
`;

interface Props {
  values: Array<{ title: string; options: string[] }>;
  placeHolder?: string;
  onChange?: (props?: any) => any;
}

export function SelectGroupedComponent(props: Props) {
  const [value, setValue] = useState<
    | {
        firstLetter: string;
        option: string;
        group: string;
      }
    | null
    | undefined
  >(null);
  //crate a new object with first letter capitalized and a key first letter to sort later
  const options = props.values.map((option) => {
    let title = option.title;
    return option.options.map((option) => {
      const firstLetter = option[0].toUpperCase();
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
  const optionsPopular = options[0];
  const optionsConcated = optionsPopular.concat(options[1]);

  return (
    <Autocomplete
      value={value}
      onChange={(
        event: any,
        newValue: {
          firstLetter: string;
          option: string;
          group: string;
        } | null
      ) => {
        setValue(newValue);
      }}
      PaperComponent={PaperStyled}
      PopperComponent={PopperStyled}
      id="grouped-demo"
      options={optionsConcated}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.option}
      sx={{ width: "100%", maxWidth: "320px" }}
      renderInput={(params) => (
        <StyledTextField ref={params.InputProps.ref}>
          <StyledInput type="text" {...params.inputProps} />
        </StyledTextField>
      )}
      renderGroup={(params) => {
        return (
          <li>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        );
      }}
    />
  );
}
