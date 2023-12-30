"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormView } from "./formView";

export function FormContainer() {
  const formMethods = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
      // duration: "",
    },
  });

  const { handleSubmit } = { ...formMethods };

  const onHandleSubmit = async (values: any) => {
    console.log("inside onhandleSubmit", values);
  };

  return (
    <Form {...formMethods}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <FormView />
        <Button variant={"default"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
