import { Controller, useForm } from "react-hook-form";
import {
  StyledCarFiveDoors,
  StyledCarFourDoors,
  StyledCarThreeDoors,
} from "../../../ui/icons";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";

export function FuelStepComponent({ handleSelect }: any) {
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
      <SubtitlePrimary>¿Usa GNC?</SubtitlePrimary>
      <Controller
        render={({ field }: any) => (
          <SelectButtonsComponent
            {...field}
            handleSelect={handleSelect}
            selectKey="gnc"
            ref={null}
            values={[
              {
                value: "Si",
                text: "Si",
              },
              {
                value: "No",
                text: "Otro combustible",
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
