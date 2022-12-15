import styled from "@emotion/styled";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: "big" | "small";
}

export const AddLabelRoot = styled.div<Props>`
  position: relative;
  width: 100%;
  max-width: 340px;
  height: 100%;
  color: var(--dark-ligth);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  flex-direction: ${(props) => (props.type == "big" ? "column" : "row")};
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.type == "big" ? "16px" : "10px")};
  border: 1px solid var(--primary);
  border-radius: 10px;
  cursor: pointer;
`;
