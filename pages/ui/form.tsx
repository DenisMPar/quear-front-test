import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { FormComponent } from "../../components/form";
import { GroupedFormComponent } from "../../components/form/grouped-form";

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
    </div>
  );
};

export default Form;
