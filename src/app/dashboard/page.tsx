import { Sidebar } from "@/components/sidebar";

export default function Page() {
  return (
    <main
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      {/* <AccordionDemo /> */}
      {/* <Menu /> */}
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
          </div>
        </div>
      </div>
    </main>
  );
}
