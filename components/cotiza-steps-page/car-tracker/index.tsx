import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectButtonsComponent } from "../../select/buttons";

export function TrackerStepComponent({ handleSelect }: any) {
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
      <SubtitlePrimary>¿Tiene localizador?</SubtitlePrimary>
      <Controller
        render={({ field }: any) => (
          <SelectButtonsComponent
            {...field}
            handleSelect={handleSelect}
            selectKey="tracker"
            ref={null}
            values={[
              {
                value: "Si",
                text: "Si",
              },
              {
                value: "No",
                text: "No",
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
