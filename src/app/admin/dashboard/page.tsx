import { SidebarExample } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";

import { Search } from "./components/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <TopBar />
      <main className="pt-[60px]">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-7 max-w-[400]">
              <SidebarExample className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
