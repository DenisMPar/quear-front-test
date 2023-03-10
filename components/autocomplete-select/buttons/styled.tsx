import styled from "@emotion/styled";
import { ButtonBig } from "../../../ui/buttons/styled";
import { IconsProps } from "../../../ui/icons";

interface PropsRoot extends React.HTMLAttributes<HTMLDivElement> {
  horizontal: boolean | undefined;
}

export const SelectButtonRoot = styled.div<PropsRoot>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  justify-content: space-between;
  gap: ${(props) => (props.horizontal ? "14px" : "")};
  max-width: ${(props) => (props.horizontal ? "276px" : "")};
  margin: ${(props) => (props.horizontal ? "0 auto" : "")};
  height: ${(props) => (props.horizontal ? "54px" : "")}; ;
`;
