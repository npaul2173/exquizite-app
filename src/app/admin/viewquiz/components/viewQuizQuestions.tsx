import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2Icon, Circle, List } from "lucide-react";
import { quizQuestion } from "../data";

export default function ViewQuizQuestion() {
  return (
    <>
      <div className="flex justify-start space-x-2">
        <List />
        <p>{quizQuestion?.length} questions</p>
      </div>
      {quizQuestion?.map((item, index) => (
        <Card className=" items-center ">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between items-baseline">
                <p>
                  {index + 1}.{item.text}{" "}
                </p>
                <Button size="sm" variant="secondary">
                  <CheckCircle2Icon className="mr-2 h-4 w-4" /> {item.points}{" "}
                  point
                </Button>
              </div>
            </CardTitle>
            {/* <CardDescription>{data[1].description}</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {item.answers?.map((ele, eleIndex) => (
                <div>
                  {item.correctAnswer === eleIndex ? (
                    <div className="flex space-x-2">
                      <Circle color="green" fill="green" />
                      <p>{ele}</p>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Circle color="red" fill="red" />
                      <p>{ele}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4"></CardFooter>
        </Card>
      ))}
    </>
  );
}
