import * as z from "zod";

export const FormSchema = z.object({
  // description: z.string(),
  title: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  tags: z.string().array(),
  duration: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});
export type FormDataTypes = z.infer<typeof FormSchema>;
