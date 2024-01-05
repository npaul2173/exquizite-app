import * as z from "zod";

export const FormSchema = z.object({
  emailOrUserName: z.string().min(1),
});
export type FormDataTypes = z.infer<typeof FormSchema>;
