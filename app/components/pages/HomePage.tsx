"use client";
import { useLanguage } from "../../context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  console.log("lg", language);
  return (
    <div className="flex flex-col flex-1 w-screen items-center justify-center bg-zinc-100/80">
      <main className="flex max-w-3xl flex-col items-center justify-center py-32 bg-white sm:items-start">
        content
      </main>
    </div>
  );
}
