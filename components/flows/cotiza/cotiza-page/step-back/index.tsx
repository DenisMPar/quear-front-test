import { StyledArrow } from "../../../../../ui/icons";
import { StepBackArrowContainer, StepBackRoot, StepBackText } from "./styled";

interface Props {
  href: string;
}

export function StepBackComponent(props: Props) {
  return (
    <StepBackRoot href={props.href}>
      <StepBackArrowContainer>
        <StyledArrow color="dark-ligth" width="20px" height="20px" />
      </StepBackArrowContainer>
      <StepBackText>Volver al paso anterior</StepBackText>
    </StepBackRoot>
  );
}
