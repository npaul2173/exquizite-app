import { SidebarExample } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import SearchResult from "./components/searchresult";
export default function SearchQuizPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <TopBar />
      <main className="pt-[60px]">
        <div className="border-t">
          <div className="bg-background pt-[10px]">
            <div className="grid lg:grid-cols-7 max-w-[400]">
              <SidebarExample className="hidden lg:block" />
              <div className="col-span-2 lg:col-span-6 px-8">
                <SearchResult />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
