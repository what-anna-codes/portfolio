import { useLanguage } from "@/app/context/LanguageContext";
import { Section } from "../../ui/Section/Section";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { TextBlock } from "../../ui/TextBlock/TextBlock";
import Image from "next/image";
import { start_en, start_pl } from "@/app/data/start";
import { useState } from "react";

export const StartSection = () => {
  const { language } = useLanguage();
  const [isHovered, setHovered] = useState(false);
  const isEnglish = language === "en";
  return (
    <Section
      id="start"
      classNames="flex flex-1 flex-row align-end grow w-full max-w-5xl pb-0"
      bg="bg-mauve-200/60">
      <div
        className="flex flex-col h-full justify-between  pb-12  align-start max-sm:w-full w-[68%] lg:w-[70%]"
        style={{
          transition: "all 1s",
          filter: !isHovered
            ? "contrast(150%) grayscale(100%)"
            : "contrast(110%) grayscale(0%)",
        }}>
        <SectionHeader
          content="anna karpiuk"
          classNames="m-0 p-4 pb-8 max-sm:text-center max-sm:align-center max-sm:pl-4 pl-12 lg:pb-12 lg:text-5xl xl:text-6xl"
        />
        <TextBlock
          classNames="w-full bg-transparent z-2 max-sm:text-center max-sm:pl-0 md:text-lg lg:text-xl"
          content={isEnglish ? start_en.description : start_pl.description}
        />
        <div className="mt-8 max-sm:place-self-center bg-mauve-600  ml-12 max-sm:ml-4  w-40 h-10" />
      </div>
      {/* <div
          className="flex relative w-full   sm:aspect-video lg:aspect-[unset] max-h-60 "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <TextBlock
            classNames= "outline w-[50%] sm:w-[70%] bg-transparent z-2"
            content={isEnglish ? start_en.description : start_pl.description}
          />
          </div> */}

      <div className="transform-origin:right-bottom w-[42%] md:w-[35%] lg:w-[30%] max-sm:hidden overflow-visible z-5 flex align-end justify-end h-full">
        <Image
          style={{ transition: "all 1s" }}
          className="  z-2 drop-shadow-2xl  bottom-0 right-0 w-auto object-bottom-right drop-shadow-mauve-900 object-cover"
          src={`/img/profile/anna-color.png`}
          alt="anna outline"
          width={480}
          height={733}
        />
      </div>
    </Section>
  );
};
