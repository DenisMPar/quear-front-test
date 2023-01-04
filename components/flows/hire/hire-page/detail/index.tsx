import { DatosSeguro } from "../../../../../lib/mock-values";
import { StyledChecked, StyledClose } from "../../../../../ui/icons";
import { BodySecondary, SubtitleSecondary } from "../../../../../ui/text";
import {
  HirePageDetailContainerText,
  HirePageDetailContainerValue,
  HirePageDetailTitle,
} from "./styled";

interface Props {
  values?: DatosSeguro[];
}

export function HirePageDetailComponent(props: Props) {
  return (
    <div>
      {props.values?.map((el, index) => {
        return (
          <HirePageDetailContainerValue dark={index % 2 != 0} key={el.title}>
            <HirePageDetailContainerText>
              <HirePageDetailTitle color={el.value ? "primary" : "dark-ligth"}>
                {el.title}
              </HirePageDetailTitle>
              <BodySecondary color="primary">{el.value}</BodySecondary>
            </HirePageDetailContainerText>
            {el.value ? (
              <StyledChecked />
            ) : (
              <StyledClose color="dark-ligth" width="20px" height="20px" />
            )}
          </HirePageDetailContainerValue>
        );
      })}
    </div>
  );
}
