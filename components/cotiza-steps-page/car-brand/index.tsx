import { Controller } from "react-hook-form";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectGroupedComponent } from "../../select/grouped";

export function BrandStepComponent({ control, handleSelect }: any) {
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
      <SubtitlePrimary>¿De qué marca es tu auto?</SubtitlePrimary>
      <Controller
        render={({ field }: any) => (
          <SelectGroupedComponent
            {...field}
            handleSelect={handleSelect}
            selectKey="marca"
            ref={null}
            placeHolder="Elegir marca"
            values={[
              {
                title: "Más buscadas:",
                options: ["Chevrolet", "Ford", "Renault"],
              },
              {
                title: "Todas las marcas:",
                options: ["Audi", "BMW"],
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
