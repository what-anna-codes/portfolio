import { useLanguage } from "@/app/context/LanguageContext";
import { Section } from "../../ui/Section/Section";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { journey_en, journey_pl } from "@/app/data/journey";
import { Moment } from "./Moment/Moment";

export const JourneySection = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <Section id="journey" bg="bg-mauve-200/40">
      <SectionHeader
        classNames="text-right pr-12 pb-12"
        content={isEnglish ? journey_en.title : journey_pl.title}
      />
      {(isEnglish ? journey_en : journey_pl).moments.map((moment) => (
        <Moment data={moment} key={`moment-${moment.id}`} />
      ))}
    </Section>
  );
};
