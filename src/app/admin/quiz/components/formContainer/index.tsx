"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FormView } from "./formView";
import { FormInputField } from "@/components/formFields/FormInputField";

export function FormContainer() {
  const formMethods = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
      // duration: "",
    },
  });

  const { handleSubmit, getValues, control } = { ...formMethods };
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const onHandleSubmit = async (values: any) => {
    console.log("inside onhandleSubmit", values);
    // console.log("inside onhandleSubmit");
  };

  return (
    <Form {...formMethods}>
      <form onSubmit={handleSubmit(onHandleSubmit)} className="w-2/3 space-y-6">
        <FormView />
        <Button variant={"default"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
