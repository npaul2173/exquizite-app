"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart2, Globe2, LayoutDashboard, Library } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[]
}

export function Sidebar({ className }: SidebarProps) {
  const route = useRouter();

  return (
    <div className={cn("pb-12", className, " lg:border-r")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {/* <Button
              variant="default"
              className="w-full justify-start space-x-2"
              onClick={() => route.push("/admin/quiz")}
            >
              <Globe2 size={16} /> <p className="bold">Create</p>
            </Button> */}
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <LayoutDashboard size={16} /> <p>Dashboard</p>
            </Button>
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <BarChart2 size={16} /> <p>Analytics</p>
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
