"use client";
import { AboutSection } from "../sections/about/AboutSection";
import { JourneySection } from "../sections/journey/JourneySection";
import { StartSection } from "../sections/start/StartSection";
import { ToolsSection } from "../sections/tools/ToolsSection";
import LanguageSwitch from "../ui/LanguageSwitch/LanguageSwitch";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 w-screen max-w-screen overflow-hidden items-center justify-center bg-zinc-50">
      <main className="relative flex w-screen max-w-5xl flex-col items-center justify-center py-32 bg-transparent sm:items-start">
        <LanguageSwitch />
        <StartSection />
        <ToolsSection />
        <JourneySection />
        <AboutSection />
      </main>
    </div>
  );
}
