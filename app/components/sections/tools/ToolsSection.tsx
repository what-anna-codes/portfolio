import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import "./ToolsSection.css";
import {
  MAIN_TOOLS_END,
  tools_data,
  tools_ui_en,
  tools_ui_pl,
} from "@/app/data/tools";
import Switch from "../../ui/Switch/Switch";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Section } from "../../ui/Section/Section";
import { Tool } from "./Tool/Tool";

export const ToolsSection = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const tools_ui = isEnglish ? tools_ui_en : tools_ui_pl;
  const [showMore, setShowMore] = useState(tools_ui.switch.main);
  const categories = Object.keys(tools_data) as (keyof typeof tools_data)[];
  if (!categories.length) return null;

  return (
    <Section bg="bg-transparent" classNames="section-tools pb-12" id="tools">
      <SectionHeader
        content={tools_ui.title}
        classNames="text-6xl text-center pb-16"
      />
      <div className="tools__switch">
        <Switch
          classNames="btn-frame-long max-w-fit"
          selected={showMore}
          options={Object.values(tools_ui.switch)}
          select={setShowMore}
        />
      </div>
      <div className="tools__categories h-fit min-h-0 w-fit flex justify-center">
        {categories.map((category) => {
          const separatorIndex = tools_data[category].indexOf(MAIN_TOOLS_END);
          const tools = tools_data[category].toSpliced(separatorIndex, 1);
          return (
            <div
              key={`tools__category-${category}`}
              className="tools__category  max-md:w-full max-md:even:justify-start max-md:odd:justify-end">
              <h3 className="tools__category__headline">
                {tools_ui.categories[category]}
              </h3>
              {tools.map((tool, toolIndex) => {
                const isMain = toolIndex < separatorIndex;
                const showAll = showMore === tools_ui.switch.all;
                return (
                  <Tool
                    key={`tool-${tool}`}
                    isMain={isMain}
                    isVisible={isMain || showAll}
                    label={tool}
                    index={toolIndex}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
