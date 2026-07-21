"use client";
import { AboutSection } from "../sections/about/AboutSection";
import { StartSection } from "../sections/start/StartSection";
import LanguageSwitch from "../ui/LanguageSwitch/LanguageSwitch";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 w-screen items-center justify-center bg-zinc-100/80">
      <main className="relative flex max-w-3xl flex-col items-center justify-center py-32 bg-white sm:items-start">
        <LanguageSwitch />
        <StartSection />
        <AboutSection />
      </main>
    </div>
  );
}
