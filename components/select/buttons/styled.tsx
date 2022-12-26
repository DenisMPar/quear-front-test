import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  horizontal: boolean | undefined;
}

export const SelectButtonRoot = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  gap: 16px;
`;
