"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "p-4 flex justify-between items-center  sticky top-0 bg-background z-[100] transition-shadow",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div>
        <Icons.logo className="h-10 w-20" />
      </div>

      <div className="flex gap-x-4">
        <ModeToggle />
        <Button variant={"outline"} onClick={() => route.push("/auth/login")}>
          Login
        </Button>
        <Button onClick={() => route.push("/auth/signup")}>Register</Button>
      </div>
    </header>
  );
}

export default HeaderSection;
