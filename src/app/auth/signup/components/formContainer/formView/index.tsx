import { FormInputField } from "@/components/formFields/FormInputField";
import { FormDataTypes } from "../scheme";
import { useFormContext } from "react-hook-form";
import { FormCalendarField } from "@/components/formFields/FormCalendarField";

export function FormView() {
  const { control } = useFormContext<FormDataTypes>(); // retrieve all hook methods
  return (
    <div className="grid grid-cols-2 w-full items-center gap-4">
      <div>
        <FormInputField
          name="userName"
          control={control}
          placeHolder="Enter user name"
          label="User Name"
        />
      </div>
      <div>
        <FormInputField
          name="email"
          control={control}
          placeHolder="Enter email"
          label="Email"
        />
      </div>
      <div>
        <FormInputField
          name="password"
          control={control}
          placeHolder="Enter password"
          label="Password"
          type="password"
        />
      </div>
      <div>
        <FormInputField
          name="firstName"
          control={control}
          placeHolder="Enter first name"
          label="First Name"
        />
      </div>
      <div>
        <FormInputField
          name="lastName"
          control={control}
          placeHolder="Enter last name"
          label="Last Name"
        />
      </div>
      <div>
        <FormCalendarField name="dob" control={control} label="Date of birth" />
      </div>
    </div>
  );
}
