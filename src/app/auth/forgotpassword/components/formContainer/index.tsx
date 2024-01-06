"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormView } from "./formView";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function FormContainer() {
  const formMethods = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailOrUserName: "",
    },
  });

  const { handleSubmit } = { ...formMethods };
  const { toast } = useToast();
  const route = useRouter();

  const onHandleSubmit = async (values: any) => {
    console.log("submit values", values);
    toast({
      title: "Reset password",
      description:
        "A link has been sent to you on your registered email address",
    });
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
