import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe2, Library } from "lucide-react";
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[]
}
export function SidebarExample({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className, " lg:border-r")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant="default"
              className="w-full justify-start space-x-2"
            >
              <Globe2 size={16} /> <p className="bold">Create</p>
            </Button>

            <Button variant="ghost" className="w-full justify-start space-x-2">
              <Globe2 size={16} /> <p>Explore</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <Library size={16} /> <p>Collection</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
