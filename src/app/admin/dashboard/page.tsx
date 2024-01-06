import { SidebarExample } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";

import { Search } from "./components/search";
import { Topics } from "./components/topics";
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
                <Topics />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
