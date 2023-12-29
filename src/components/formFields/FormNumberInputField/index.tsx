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

type FormNumberInputFieldProps = {
  name: string;
  control: any;
  placeHolder?: string;
  label?: string;
};

export const FormNumberInputField: React.FC<FormNumberInputFieldProps> = ({
  name,
  control,
  label,
  placeHolder,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder={placeHolder}
                {...field}
                value={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
