import Footer from "./components/footer";
import HeaderSection from "./components/header";
import HeroSection from "./components/hero";
import ValueSection from "./components/valueSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <HeaderSection />
      <HeroSection />
      <ValueSection />
      <Footer />
    </main>
  );
}
