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
    <Section id="start">
      <div
        style={{
          transition: "all 1s",
          filter: !isHovered
            ? "contrast(150%) grayscale(100%)"
            : "contrast(110%) grayscale(0%)",
        }}>
        <SectionHeader content="anna karpiuk" />
        <div
          className="flex h-60"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <TextBlock
            classNames="w-[80%]"
            content={isEnglish ? start_en.description : start_pl.description}
          />
          <div className="relative h-full w-[50%]">
            <Image
              style={{ transition: "all 1s" }}
              className="absolute z-2 drop-shadow-2xl -bottom-12 right-0 h-auto object-bottom-right drop-shadow-mauve-900 object-contain"
              src={`/img/profile/anna-color.png`}
              alt="anna outline"
              width={480}
              height={733}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
