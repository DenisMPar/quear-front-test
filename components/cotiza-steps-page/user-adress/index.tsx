import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputShadowed } from "../../../ui/input/styled";
import { SubtitlePrimary } from "../../../ui/text";
import { SelectComponent } from "../../select";
import { StyledForm } from "./styled";

export function AddressStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control, register } = useForm();

  function onSubmit(submit: any) {
    handleSelect("direccion", submit);
  }

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
      <SubtitlePrimary>¿Donde vivis?</SubtitlePrimary>
      <div style={{ width: "100%", maxWidth: "343px" }}>
        <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }: any) => (
              <SelectComponent
                {...field}
                selectKey="provincia"
                ref={null}
                values={["Mendoza", "Bs as", "Cordoba"]}
                placeHolder={"Provincia"}
              />
            )}
            name="provincia"
            control={control}
          />
          <Controller
            render={({ field }: any) => (
              <SelectComponent
                {...field}
                selectKey="departamento"
                ref={null}
                values={["mgue", "san rafael", "guaymallen"]}
                placeHolder={"departamento"}
              />
            )}
            name="departamento"
            control={control}
          />

          <InputShadowed {...register("postal")} placeholder="Código postal" />

          <button>Siguiente</button>
        </StyledForm>
      </div>
    </div>
  );
}
