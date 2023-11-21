import { AccordionDemo } from "@/components/accordianDemo";
import { AlertDialogDemo } from "@/components/alertDialog";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4 grid-cols-2">
        <Button>Save</Button>
        <Button variant={"outline"}>Cancel</Button>
      </div>
      <ModeToggle />
      <AlertDialogDemo />
      <AccordionDemo />
    </main>
  );
}
