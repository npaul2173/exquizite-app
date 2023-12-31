import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormInputFieldProps = {
  name: string;
  control: any;
  placeHolder?: string;
  label?: string;
};

export const FormInputField: React.FC<FormInputFieldProps> = ({
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
              <Input placeholder={placeHolder} {...field} value={field.value} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
