import { SidebarExample } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import Question from "./components/question";
export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <TopBar />
      <main className="pt-[60px]">
        <div className="border-t">
          <div className="bg-background pt-[10px]">
            <div className="grid lg:grid-cols-7">
              <SidebarExample className="hidden lg:block" />
              <div className="grid grid-cols-1 space-y-10 ">
                <Question />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
