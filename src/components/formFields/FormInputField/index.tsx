import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, useController } from "react-hook-form";

type FormInputFieldProps = {
  name: string;
  control: any;
};

export const FormInputField: React.FC<FormInputFieldProps> = ({
  name,
  control,
}) => {
  // const {
  //   field: { value, onBlur, onChange, ref },
  //   fieldState: { error },
  // } = useController({ name });

  // console.log(value);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter description"
                {...field}
                value={field.value}
              />
            </FormControl>
            {/* <FormDescription>This is your public display name.</FormDescription> */}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
