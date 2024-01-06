import { FormInputField } from "@/components/formFields/FormInputField";
import { FormDataTypes } from "../schema";
import { useFormContext } from "react-hook-form";

export function FormView() {
  const { control } = useFormContext<FormDataTypes>(); // retrieve all hook methods
  return (
    <div className="grid grid-cols-1 w-full items-center gap-4">
      <div>
        <FormInputField
          name="emailOrUserName"
          control={control}
          placeHolder="Enter email or username"
          label="Email"
        />
      </div>
    </div>
  );
}
