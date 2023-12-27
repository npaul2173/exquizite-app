import { AccordionDemo } from "@/components/accordianDemo";
import { AlertDialogDemo } from "@/components/alertDialog";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";
import HeroSection from "./components/hero";
import Header from "./components/header";
import HeaderSection from "./components/header";
import ValueSection from "./components/valueSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <HeaderSection />
      <HeroSection />
      <ValueSection />
      <Footer />
      {/* <div className="grid gap-4 grid-cols-2">
        <Button>Save</Button>
        <Button variant={"outline"}>Cancel</Button>
      </div>
      <ModeToggle />
      <AlertDialogDemo />
      <AccordionDemo /> */}
    </main>
  );
}
