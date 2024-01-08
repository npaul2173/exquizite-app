import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { data } from "../../searchquiz/components/columns.data";

export default function ViewQuizHeader() {
  return (
    <Card className="w-[850px] items-center">
      <CardHeader>
        <CardTitle>{data[0].title}</CardTitle>
        <CardDescription>{data[0].description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
