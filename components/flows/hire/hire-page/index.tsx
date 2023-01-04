import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  dataDos,
  dataPolizaDos,
  dataPolizaTres,
  dataPolizaUno,
  dataTres,
  dataUno,
  DatoPoliza,
} from "../../../../lib/mock-values";
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

const results = [
  dataPolizaUno,
  dataPolizaDos,
  dataPolizaTres,
  dataPolizaDos,
  dataPolizaTres,
];
export function HirePage() {
  const [selected, setSelected] = useState<DatoPoliza | null>();
  const [active, setActive] = useState<number | null>();
  function handleSelected(index: number) {
    setSelected(results[index]);
    setActive(index);
  }
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
        Encontramos <b>{results.length} opciones de seguros</b> para vos
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
        {results.map((el, index) => {
          return (
            <CardComponent
              active={index == active}
              index={index}
              onDetail={handleSelected}
              key={index}
              data={el}
            />
          );
        })}
      </CarouselResponsiveComponent>
      <div>
        <HirePageSubTitle>Seguro seleccionado</HirePageSubTitle>
        {selected && (
          <SubtitleSecondary color="primary">
            <b>
              {selected?.type}, {selected?.company} Seguros
            </b>
          </SubtitleSecondary>
        )}
      </div>
      <HirePageDetailComponent values={selected?.details} />
    </HirePageRoot>
  );
}
