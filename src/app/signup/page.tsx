import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormContainer } from "./components/formContainer";

export default function CardWithForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[550px]">
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
