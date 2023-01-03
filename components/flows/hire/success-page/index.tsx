import Link from "next/link";
import { TextButton } from "../../../../ui/buttons/styled";
import { StyledCheckedBig } from "../../../../ui/icons";
import { CodeBoxComponent } from "./code-box";
import { PolicyComponent } from "./policy-info";
import {
  HireSuccessRoot,
  HireSuccessSubtitle,
  HireSuccessTitle,
  HireSuccessTitleContainer,
} from "./styled";

export function HireSuccessPage() {
  return (
    <HireSuccessRoot>
      <StyledCheckedBig />
      <HireSuccessTitleContainer>
        <HireSuccessTitle>¡Listo!</HireSuccessTitle>
        <HireSuccessSubtitle>¡Ya casi tenés tu seguro!</HireSuccessSubtitle>
      </HireSuccessTitleContainer>
      <CodeBoxComponent />
      <PolicyComponent pictures={false} />

      <TextButton underline={false} color={"bg"}>
        <Link href={"/"}>Volver al inicio</Link>
      </TextButton>
    </HireSuccessRoot>
  );
}
