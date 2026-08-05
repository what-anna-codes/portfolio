import { useLanguage } from "@/app/context/LanguageContext";
import { Section } from "../../ui/Section/Section";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { journey_en, journey_pl } from "@/app/data/journey";
import { Moment } from "../journey/Moment/Moment";
import { useState } from "react";
import { IProject, projects_en } from "@/app/data/projects-en";
import { projects_pl } from "@/app/data/projects-pl";
import { ProjectsModal } from "../ProjectsModal/ProjectsModal";
import { Modal } from "../../ui/Modal/Modal";

export const JourneySection = () => {
  const { language } = useLanguage();
  const [currentProjectId, setCurrentProjectId] = useState("");
  const isEnglish = language === "en";
  const projects_data = isEnglish ? projects_en : projects_pl;
  const journey_data = isEnglish ? journey_en : journey_pl;
  const currentProject = currentProjectId
    ? projects_data?.find((p: IProject) => p.id === currentProjectId)
    : undefined;

  return (
    <Section id="journey" bg="bg-mauve-200/40 relative">
      <SectionHeader
        classNames="text-center mb-40"
        content={journey_data.title}
      />
      <div className="moments w-full pl-0 lg:pl-6">
        {journey_data.moments.map((moment) => (
          <Moment
            onClick={() => setCurrentProjectId(moment?.projectId || "ajajaj")}
            data={moment}
            key={`moment-${moment.id}`}
          />
        ))}
      </div>

      {currentProjectId && currentProject ? (
        <Modal
          onClose={() => setCurrentProjectId("")}
          content={
            <ProjectsModal
              projects={projects_data}
              activeId={currentProjectId}
              close={() => setCurrentProjectId("")}
            />
          }
        />
      ) : null}
    </Section>
  );
};
