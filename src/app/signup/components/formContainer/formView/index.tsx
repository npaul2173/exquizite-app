import { FormInputField } from "@/components/formFields/FormInputField";
import { FormDataTypes } from "../scheme";
import { useFormContext } from "react-hook-form";

export function FormView() {
  const { control } = useFormContext<FormDataTypes>(); // retrieve all hook methods
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <FormInputField
          name="userName"
          control={control}
          placeHolder="Enter user name"
          label="User Name"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <FormInputField
          name="email"
          control={control}
          placeHolder="Enter email"
          label="Email"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <FormInputField
          name="password"
          control={control}
          placeHolder="Enter password"
          label="Password"
          type="password"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <FormInputField
          name="firstName"
          control={control}
          placeHolder="Enter first name"
          label="First Name"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <FormInputField
          name="lastName"
          control={control}
          placeHolder="Enter last name"
          label="Last Name"
        />
      </div>
      {/* <div className="flex flex-col space-y-1.5">
        <Label htmlFor="framework">Framework</Label>
        <Select>
          <SelectTrigger id="framework">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="sveltekit">SvelteKit</SelectItem>
            <SelectItem value="astro">Astro</SelectItem>
            <SelectItem value="nuxt">Nuxt.js</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
    </div>
  );
}
