import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topBar";

type UserLayoutProps = {
  children: React.ReactNode;
};
export const UserLayout = (props: UserLayoutProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <TopBar />
      <main className="pt-[60px]">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-7">
              <Sidebar className="hidden lg:block" />

              <div className="col-span-3 lg:col-span-6">{props.children}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
