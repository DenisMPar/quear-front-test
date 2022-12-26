import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";

export function GarageStepComponent({ handleSelect }: any) {
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
      <SubtitlePrimary>¿Dónde duerme?</SubtitlePrimary>
      <Controller
        render={({ field }: any) => (
          <SelectButtonsComponent
            {...field}
            handleSelect={handleSelect}
            selectKey="garage"
            ref={null}
            values={[
              {
                value: "En garage",
                text: "En garage",
              },
              {
                value: "En la calle",
                text: "En la calle",
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
