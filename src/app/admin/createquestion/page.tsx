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
            <div className="grid lg:grid-cols-7 bg-black">
              <SidebarExample className="hidden lg:col-span-1 lg:block bg-red-500" />
              <div className="lg:col-span-6 flex justify-center items-center bg-amber-300">
                <div className="grid grid-cols-2 bg-violet-600">
                  <div className="lg:col-span-6">
                    <Question />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
