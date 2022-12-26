import { Controller, useForm } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";

export function VersionStepComponent({ handleSelect }: any) {
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
      <SubtitlePrimary>¿Y la versión?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "343px" }}>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="version"
              ref={null}
              values={[
                "1.0 Ltz At L/21",
                "1.0 Ltz L/21",
                "1.0 Plus Ltz L/21",
                "1.0 Plus Premier I L/19",
              ]}
              placeHolder={"Elegir versión"}
            />
          )}
          name="TextField"
          control={control}
        />
      </div>
    </div>
  );
}
