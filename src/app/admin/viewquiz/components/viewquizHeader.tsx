import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { data } from "../../searchquiz/components/columns.data";
import { Pencil, Timer, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ViewQuizHeader() {
  return (
    <Card className=" w-[850px] items-center ">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <div className="flex space-x-4 space-x-4">
              <img src={data[1].coverImage} className="w-[80px] h-[80px]" />
              <div className="space-y-4">
                <p style={{ fontSize: "20px" }}>{data[1].topic}</p>
                <p>{data[1].title}</p>
              </div>
            </div>
            <div className="space-y-4">
              <p>{data[1].isPublished ? "Published" : "Unpublished"}</p>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{data[1].description}</CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Button variant="secondary">
          <Timer className="mr-2 h-4 w-4" /> {data[1].duration} min
        </Button>
        {!data[1]?.isPublished && (
          <Button variant="secondary">
            <Trash className="mr-2 h-4 w-4" /> Delete Quiz
          </Button>
        )}
        {!data[1]?.isPublished && (
          <Button variant="secondary">
            <Pencil className="mr-2 h-4 w-4" /> Edit Quiz
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
