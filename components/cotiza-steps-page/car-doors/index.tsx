import { Controller, useForm } from "react-hook-form";
import {
  StyledCarFiveDoors,
  StyledCarFourDoors,
  StyledCarThreeDoors,
} from "../../../ui/icons";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";

export function DoorsStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  return (
    <div
      style={{
        color: "var(--primary)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <SubtitlePrimary>¿Cuantas puertas tiene?</SubtitlePrimary>
      <Controller
        render={({ field }: any) => (
          <SelectButtonsComponent
            {...field}
            handleSelect={handleSelect}
            selectKey="puertas"
            ref={null}
            values={[
              {
                icon: <StyledCarThreeDoors />,
                value: "3",
                text: "Tres puertas",
              },
              {
                icon: <StyledCarFourDoors />,
                value: "4",
                text: "Cuatro puertas",
              },
              {
                icon: <StyledCarFiveDoors />,
                value: "5",
                text: "Cinco puertas",
              },
            ]}
          />
        )}
        name="TextField"
        control={control}
      />
    </div>
  );
}
