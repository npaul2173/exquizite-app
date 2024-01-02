"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./scheme";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormView } from "./formView";

export function FormContainer() {
  const formMethods = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
    },
  });

  const { handleSubmit } = { ...formMethods };

  const onHandleSubmit = async (values: any) => {
    console.log("submit values", values);
  };

  return (
    <Form {...formMethods}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <FormView />
        <div className="h-16 grid grid-cols-1 gap-4 content-center">
          <Button variant={"default"} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
