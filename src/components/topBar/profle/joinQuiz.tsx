import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/themeToggle";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Join a quiz</Button>
      </DialogTrigger>
      <ModeToggle />
      <DialogContent className="sm:max-w-[425px] pt-[30px]">
        <DialogHeader>
          <DialogTitle>Join quiz</DialogTitle>
          <DialogDescription>
            Enter the unique code provided by the quiz creator to join the quiz
            and test your knowledge!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Code
            </Label>
            <Input
              id="username"
              className="col-span-3"
              placeholder="Enter code"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Join</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
