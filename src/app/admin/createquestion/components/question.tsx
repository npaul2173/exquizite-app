import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Timer, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Question() {
  return (
    <div className="">
      <Card className="">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-end space-x-4"></CardFooter>
      </Card>
    </div>
  );
}
