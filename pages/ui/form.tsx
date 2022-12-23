import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { FormComponent } from "../../components/form";
import { GroupedFormComponent } from "../../components/form/grouped-form";
import { SelectButtonsComponent } from "../../components/select/buttons";
import { StyledCarFourDoors, StyledCarThreeDoors } from "../../ui/icons";

const Form: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <FormComponent />
      <GroupedFormComponent />
      <SelectButtonsComponent
        selectKey="peurtas"
        handleSelect={onSubmit}
        values={[
          { icon: <StyledCarThreeDoors />, value: "3", text: "Tres puertas" },
          { icon: <StyledCarFourDoors />, value: "4", text: "Cuatro puertas" },
        ]}
      />
    </div>
  );
};

export default Form;
