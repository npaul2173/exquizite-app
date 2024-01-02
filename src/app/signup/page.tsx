import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormContainer } from "./components/formContainer";

export default function CardWithForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>Create your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <FormContainer />
        </CardContent>
      </Card>
    </div>
  );
}
