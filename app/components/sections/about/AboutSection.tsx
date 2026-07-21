import { useLanguage } from "@/app/context/LanguageContext";
import { about_en, about_pl } from "@/app/data/about";
import { Section } from "../../ui/Section/Section";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { TextBlock } from "../../ui/TextBlock/TextBlock";
import BookCarousel from "./BookCarousel/BookCarousel";
import { books } from "../../../data/books";

export const AboutSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <Section>
      <SectionHeader content={isEnglish ? about_en.title : about_pl.title} />
      <TextBlock
        classNames="w-[90%] px-12 text-justify text-pretty"
        content={isEnglish ? about_en.intro : about_pl.intro}
      />
      <BookCarousel books={books} />
      <TextBlock
        classNames="w-[90%] px-12 text-justify text-pretty"
        content={isEnglish ? about_en.outro : about_pl.outro}
      />
    </Section>
  );
};
