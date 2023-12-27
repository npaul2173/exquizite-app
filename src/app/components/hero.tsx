import { Button } from "@/components/ui/button";
import React from "react";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-7xl font-extrabold tracking-tighter">
          Craft quizzes, spark minds
        </h1>
        <p className="text-xl mb-8">Share your knowledge, ignite curiosity.</p>

        <Button variant={"secondary"}>Create Your First Quiz</Button>

        {/* <img
          src="path/to/your/hero-image.png"
          alt="Hero image showcasing people taking quizzes"
          className="w-full absolute bottom-0"
        /> */}
      </div>
    </section>
  );
}

export default HeroSection;
