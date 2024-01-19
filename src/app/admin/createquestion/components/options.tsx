"use client";
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

export default function Options() {
  const options = [1, 2, 3, 4];
  return (
    <div className="flex justify-between gap-4">
      {options.map((item) => (
        <Card className="w-full">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-end space-x-4"></CardFooter>
        </Card>
      ))}
    </div>
  );
}
