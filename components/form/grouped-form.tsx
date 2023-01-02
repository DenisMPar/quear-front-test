import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SelectGroupedComponent } from "../select/grouped";

export function GroupedFormComponent() {
  const { handleSubmit, reset, setValue, control } = useForm();
  const [data, setData] = useState(null);
  function handleSelect(data: any) {}
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
            <SelectGroupedComponent
              {...field}
              handleSelect={handleSelect}
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
          name="Select"
          control={control}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
