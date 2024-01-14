import { SidebarExample } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";
import ViewQuizHeader from "./components/viewquizHeader";
import ViewQuizQuestion from "./components/viewQuizQuestions";
export default function ViewQuizPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <TopBar />
      <main className="pt-[60px]">
        <div className="border-t">
          <div className="bg-background pt-[10px]">
            <div className="grid lg:grid-cols-7 max-w-[400]">
              <SidebarExample className="hidden lg:block" />
              <div className="grid lg:col-span-6 justify-center space-y-10 ">
                <ViewQuizHeader />
                <ViewQuizQuestion />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
