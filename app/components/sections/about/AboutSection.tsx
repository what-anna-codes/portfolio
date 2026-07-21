import { useLanguage } from "@/app/context/LanguageContext";
import { about_en, about_pl } from "@/app/data/about";
import { useState } from "react";
import { Section } from "../../ui/Section/Section";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { TextBlock } from "../../ui/TextBlock/TextBlock";

export const AboutSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <Section>
      <SectionHeader content={isEnglish ? about_en.title : about_pl.title} />
      <TextBlock
        width="w-[80%]"
        content={isEnglish ? about_en.intro : about_pl.intro}
      />
      <TextBlock
        width="w-[80%]"
        content={isEnglish ? about_en.outro : about_pl.outro}
      />
    </Section>
  );
};
