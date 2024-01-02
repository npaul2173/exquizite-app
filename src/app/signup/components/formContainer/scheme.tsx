import * as z from "zod";

export const FormSchema = z.object({
  userName: z.string().min(1, { message: "User Name is required" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters or more" })
    .refine(
      (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/.test(
          password
        ),
      {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, and one special character",
      }
    ),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  dateOfBirth: z.date().refine(
    (dob) => {
      const currentDate = new Date();
      return dob <= currentDate;
    },
    { message: "Date of birth cannot be in future" }
  ),
});
export type FormDataTypes = z.infer<typeof FormSchema>;
