import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type FormTextareaProps = {
  name: string;
  control: any;
  placeHolder?: string;
  label?: string;
};

export const FormTextarea: React.FC<FormTextareaProps> = ({
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
              <Textarea
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
