import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SelectComponent } from "../select";

export function FormComponent() {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [data, setData] = useState(null);
  return (
    <>
      <div>
        <h1>Data:{data}</h1>
      </div>
      <form
        onSubmit={handleSubmit((data: any) => console.log(data))}
        className="form"
      >
        <Controller
          render={({ field }: any) => (
            <SelectComponent
              {...field}
              ref={null}
              values={["2022", "2021", "2020", "2019"]}
              placeHolder={"Elegir año"}
            />
          )}
          name="TextField"
          control={control}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
