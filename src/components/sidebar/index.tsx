"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigationRoutes } from "@/navigation/nav.routes";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[]
}

export function Sidebar({ className }: SidebarProps) {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className={cn("pb-12", className, " lg:border-r")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navigationRoutes.map((item, index) => {
              const isNavLinkActive = path === item.path;
              console.log({ isNavLinkActive, path, ItemPAth: item.path });

              return (
                <Button
                  key={index}
                  variant={isNavLinkActive ? "secondary" : "ghost"}
                  className="w-full justify-start space-x-2"
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  {item.icon} <p>{item.title}</p>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
