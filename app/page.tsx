import ColorSwitcher from "@/components/headers/ColorSwitcher";
import Header1 from "@/components/headers/Header1";
import Logo from "@/components/headers/Logo";
import About from "@/components/homes/home-1/About";
import BottomBackground from "@/components/homes/home-1/BottomBackground";
import Hero from "@/components/homes/home-1/Hero";
import Resume from "@/components/homes/home-1/Resume";
import Services from "@/components/homes/home-1/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noah Cherblanc - Portfolio",
  description: "Noah Cherblanc - Portfolio",
};

export default function Home() {
  return (
    <>
      <Header1 />
      <Logo />
      <ColorSwitcher />
      <main id="page-content" className="page-content">
        <Hero />
        <About />
        <Services />
        <Resume />
      </main>
      <BottomBackground />
    </>
  );
}
