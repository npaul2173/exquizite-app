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

function searchWords(searchQuery: string) {
  return techWords.filter((word) => {
    // Case-insensitive search
    return word.toLowerCase().includes(searchQuery.toLowerCase());
  });
}

export const SelectTags: React.FC = () => {
  const [tagsList, setTagsList] = useState<string[] | undefined>();
  const [textValue, setTextValue] = useState<string | undefined>();
  const [searchList, setSearchList] = useState<string[]>([]);
  console.log(textValue);

  const onChooseSearchResult = (item: string) => {
    if (tagsList?.includes(item)) setTagsList([...(tagsList || []), item]);
  };

  const onRemove = (text: string) => {
    setTagsList(tagsList?.filter((item) => item !== text));
  };

  console.log(tagsList);

  return (
    <div>
      <Chip text={"React"} onRemove={() => {}} />
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
                setTextValue(event.target.value);
                const data = searchWords(event.target.value);
                setSearchList(data);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !!textValue) {
                  setTagsList([...(tagsList || []), textValue]);
                }
              }}
            />

            <div className="max-h-[200px] overflow-y-scroll">
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

            <div className="flex flex-row max-h-[200px] overflow-y-scroll">
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
            <Button type="submit">Save tags</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
