import { Controller } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";

export function ModelStepComponent({ control, handleSelect }: any) {
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
      <SubtitlePrimary>¿Y el modelo?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "343px" }}>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="modelo"
              ref={null}
              values={["Camaro", "Cruze", "Equinox", "Onix"]}
              placeHolder={"Elegir modelo"}
            />
          )}
          name="TextField"
          control={control}
        />
      </div>
    </div>
  );
}
