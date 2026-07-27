import { useLanguage } from "@/app/context/LanguageContext";
import { about_en, about_pl } from "@/app/data/about";
import { Section } from "../../ui/Section/Section";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { TextBlock } from "../../ui/TextBlock/TextBlock";
import BookCarousel from "./BookCarousel/BookCarousel";
import { books } from "../../../data/books";

export const AboutSection = () => {
  const { language } = useLanguage();

  const { title, intro, outro } = language === "en" ? about_en : about_pl;
  return (
    <Section
      id="about"
      bg="bg-mauve-200/50"
      classNames="p-12 md:p-24 text-[17px] text-pretty font-sans flex flex-col items-center w-screen max-w-screen">
      <SectionHeader
        classNames="text-center p-0 m-0 pb-12 w-full"
        content={title}
      />
      <TextBlock classNames="p-0! text-justify" content={intro} />
      <BookCarousel books={books} />
      <TextBlock classNames="p-0! text-justify" content={outro} />
    </Section>
  );
};
