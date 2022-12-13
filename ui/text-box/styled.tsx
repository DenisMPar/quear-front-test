import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
}
export const TextBox = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  box-shadow: ${(props) => (props.shadow ? ` 0px 4px 4px var(--shadow)` : "")};
  border-radius: ${(props) => (props.shadow ? "5px" : "15px")};

  @media screen and (min-width: 1024px) {
    border-radius: ${(props) => (props.shadow ? "12px" : "30px")};
  }
`;
