import Link from "next/link";
import { useRouter } from "next/router";
import { dataUno } from "../../../../lib/mock-values";
import { StyledArrow } from "../../../../ui/icons";
import { SubtitleSecondary } from "../../../../ui/text";
import { CardComponent } from "../../../card";
import { CarouselResponsiveComponent } from "../../../carousel/responsive";
import { SelectComponent } from "../../../select";
import {
  StepBackArrowContainer,
  StepBackRoot,
  StepBackText,
} from "../../styled";
import { HirePageDetailComponent } from "./detail";
import {
  HirePageContainerFilter,
  HirePageContainerSelect,
  HirePageRoot,
  HirePageSelect,
  HirePageSubTitle,
  HirePageText,
  HirePageTitle,
} from "./styled";

export function HirePage() {
  return (
    <HirePageRoot>
      <Link href={"/cotiza"}>
        <StepBackRoot>
          <StepBackArrowContainer>
            <StyledArrow color="dark-ligth" width="20px" height="20px" />
          </StepBackArrowContainer>
          <StepBackText>Volver a cotizar</StepBackText>
        </StepBackRoot>
      </Link>
      <HirePageTitle>
        Encontramos <b>cinco (5) opciones de seguros</b> para vos
      </HirePageTitle>
      <HirePageContainerFilter>
        <HirePageText>Filtrar por:</HirePageText>
        <HirePageContainerSelect>
          <HirePageSelect
            width="229px"
            placeHolder="Seleccionar filtro"
            variant="dashboard"
            onChange={() => console.log("change")}
            values={["Tipo de seguro"]}
          />
        </HirePageContainerSelect>
      </HirePageContainerFilter>
      <CarouselResponsiveComponent>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </CarouselResponsiveComponent>
      <div>
        <HirePageSubTitle>Seguro seleccionado</HirePageSubTitle>
        <SubtitleSecondary color="primary">
          <b>Contra todo riesgo, Provincia Seguros</b>
        </SubtitleSecondary>
      </div>
      <HirePageDetailComponent values={dataUno} />
    </HirePageRoot>
  );
}
