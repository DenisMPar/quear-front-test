import { Controller } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";

export function YearStepComponent({ control, handleSelect }: any) {
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
      <SubtitlePrimary>¿De qué año es tu auto?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "343px" }}>
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              handleSelect={handleSelect}
              selectKey="año"
              ref={null}
              values={["2022", "2021", "2020", "2019"]}
              placeHolder={"Elegir año"}
            />
          )}
          name="TextField"
          control={control}
        />
      </div>
    </div>
  );
}
