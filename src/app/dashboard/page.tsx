import { SidebarExample } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <TopBar />
      <main className="pt-[60px]">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <SidebarExample className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
