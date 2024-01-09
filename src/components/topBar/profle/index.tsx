import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/themeToggle";
import { DialogDemo } from "./joinQuiz";
export const Profile = () => {
  return (
    <div className="flex flex-row space-x-4">
      <DialogDemo />
      {/* <ModeToggle /> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://npauldev.in/ProfilePictureHD.959b411b.webp" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]" align="end">
          {/* <div className="p-3 flex flex-row space-x-4">
            <Avatar>
              <AvatarImage src="https://npauldev.in/ProfilePictureHD.959b411b.webp" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-regular tracking-tight">Nabendu Paul</p>
              <p className="text-xsm text-muted-foreground">
                npaul2173@gmail.com
              </p>
            </div>
          </div> */}
          <DropdownMenuLabel className="font-normal">
            <div className="p-2 flex flex-row space-x-4">
              <Avatar>
                <AvatarImage src="https://npauldev.in/ProfilePictureHD.959b411b.webp" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">shadcn</p>
                <p className="text-xs leading-none text-muted-foreground">
                  m@example.com
                </p>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Your settings
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Resources</DropdownMenuLabel>

          <DropdownMenuGroup>
            <DropdownMenuItem>FAQ</DropdownMenuItem>
            <DropdownMenuItem>
              What&apos;s new
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button variant={"destructive"}> Log out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
