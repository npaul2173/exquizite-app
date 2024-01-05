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
import { useState } from "react";
import { techWords } from "./constants";
import { useToast } from "@/components/ui/use-toast";
import { useFormContext, useWatch } from "react-hook-form";
import { FormDataTypes } from "../../schema";
import { Badge } from "@/components/ui/badge";

function searchWords(searchQuery: string) {
  return techWords.filter((word) => {
    // Case-insensitive search
    return word.toLowerCase().includes(searchQuery.toLowerCase());
  });
}

type SelectTagsProps = {};
export const SelectTags: React.FC<SelectTagsProps> = () => {
  const [tagsList, setTagsList] = useState<string[] | undefined>();
  const [textValue, setTextValue] = useState<string | undefined>();
  const [searchList, setSearchList] = useState<string[]>([]);
  const { toast } = useToast();
  const { control, setValue } = useFormContext<FormDataTypes>(); // retrieve all hook methods
  const watch = useWatch({ control });

  const onChooseSearchResult = (item: string) => {
    if (tagsList?.includes(item)) {
      toast({
        variant: "destructive",
        title: "Tag already selected",
      });
    } else setTagsList([...(tagsList || []), item]);
  };

  const onRemove = (text: string) => {
    setTagsList(tagsList?.filter((item) => item !== text));
  };

  console.log(watch);

  return (
    <div>
      <div className="flex flex-row max-h-[200px] overflow-x-hidden flex-wrap">
        {watch.tags?.map((item, index) => {
          return (
            <Badge variant={"secondary"} key={index}>
              {item}
            </Badge>
          );
        })}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add/Edit Tags</Button>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tags</DialogTitle>
            <DialogDescription>Add or remove tags</DialogDescription>
          </DialogHeader>
          <div className="grid gap-5 py-4">
            <Input
              id="name"
              placeholder="Add/Search tags"
              value={textValue}
              onChange={(event) => {
                const isEmpty = !!!event.target.value.length;
                setTextValue(event.target.value);
                const data = searchWords(event.target.value);
                setSearchList(isEmpty ? [] : data);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !!textValue) {
                  setTagsList([...(tagsList || []), textValue]);
                }
              }}
            />

            <div className="max-h-[200px] overflow-y-scroll overflow-x-hidden">
              {searchList?.map((item, index) => {
                return (
                  <div
                    onClick={() => onChooseSearchResult(item)}
                    key={index}
                    className="cursor-pointer [&:not(:first-child)]:mt-2"
                  >
                    {item}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-row max-h-[200px] overflow-x-hidden flex-wrap">
              {tagsList?.map((item, index) => {
                return (
                  <Chip
                    text={item}
                    key={index}
                    onRemove={() => onRemove(item)}
                  />
                );
              })}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => setValue("tags", tagsList || [])}
            >
              Save tags
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
