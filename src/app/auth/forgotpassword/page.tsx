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
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Forgot password</CardTitle>
          <CardDescription>
            Please enter the email address or username associated with your
            account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormContainer />
        </CardContent>
      </Card>
    </div>
  );
}
