import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import "./ToolsSection.css";
import {
  MAIN_SKILLS_END,
  tools_data,
  tools_ui_en,
  tools_ui_pl,
} from "@/app/data/tools";
import Switch from "../../ui/Switch/Switch";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Section } from "../../ui/Section/Section";

export const ToolsSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const tools_ui = isEnglish ? tools_ui_en : tools_ui_pl;
  const [showMore, setShowMore] = useState(tools_ui.switch.main);
  const categories = Object.keys(tools_data) as (keyof typeof tools_data)[];
  if (!categories.length) return null;

  return (
    <Section classNames="section-skills pb-12" bg="bg-mauve-300/80" id="tools">
      <SectionHeader content={tools_ui.title} classNames="text-center pb-12" />
      <div className="skills__switch">
        <Switch
          classNames="btn-frame-long max-w-fit"
          selected={showMore}
          options={Object.values(tools_ui.switch)}
          select={setShowMore}
        />
      </div>
      <div className="skills__categories w-fit flex justify-center grow-0">
        {categories.map((category, i) => {
          const separatorIndex = tools_data[category].indexOf(MAIN_SKILLS_END);
          const skills = tools_data[category].filter(
            (_, i) => i !== separatorIndex,
          );
          return (
            <div
              key={`skills__category-${category}`}
              className="skills__category">
              <h3 className="skills__category__headline">
                {tools_ui.categories[category]}
              </h3>
              {skills.map((skill, skillIndex) => {
                const isMain = skillIndex < separatorIndex;
                const showAll = showMore === tools_ui.switch.all;
                return (
                  <motion.div
                    transition={{
                      type: "tween",
                      ease: "easeIn",
                      duration: 0.3,
                      delay: showAll
                        ? skillIndex * 0.2 - 0.4
                        : 1 - skillIndex * 0.2,
                    }}
                    animate={{ opacity: isMain || showAll ? 1 : 0 }}
                    key={`skills__category-${category}__skill-${skill}`}
                    className={`  skills__category__skill ${isMain ? "skills__category__skill--main" : ""}`}>
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
