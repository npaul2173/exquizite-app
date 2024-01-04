import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
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

export const SelectTags: React.FC = () => {
  return (
    <div>
      <Chip>Badge</Chip>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add/Edit Tags</Button>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tags</DialogTitle>
            <DialogDescription>Add or remove tags</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* <div className="grid grid-cols-4 items-center gap-4"> */}
            <Input
              id="name"
              //   className="col-span-3"
            />
            {/* </div> */}
          </div>
          <DialogFooter>
            <Button type="submit">Save tags</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
