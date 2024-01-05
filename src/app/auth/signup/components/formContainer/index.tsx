"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSchema } from "./scheme";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormView } from "./formView";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function FormContainer() {
  const formMethods = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dob: new Date(),
    },
  });

  const { handleSubmit } = { ...formMethods };
  const { toast } = useToast();
  const route = useRouter();

  const onHandleSubmit = async (values: any) => {
    console.log("submit values", values);
    toast({
      title: "Account created",
      description:
        "You account is successfully created you can login to your account",
    });
    setTimeout(() => {
      route.push("/auth/login");
    }, 2000);
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
