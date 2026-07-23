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
    <Section id="about" bg="bg-mauve-50" classNames="pb-12">
      <SectionHeader
        classNames="pb-12 text-center"
        content={isEnglish ? about_en.title : about_pl.title}
      />
      <TextBlock
        classNames="w-full px-24 text-justify text-pretty"
        content={isEnglish ? about_en.intro : about_pl.intro}
      />
      <BookCarousel books={books} />
      <TextBlock
        classNames="w-full px-24 text-justify text-pretty"
        content={isEnglish ? about_en.outro : about_pl.outro}
      />
    </Section>
  );
};
