import { IProject } from "@/app/data/projects-en";
import "./Project.css";
import "./ProjectSection/ProjectSection.css";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { Tool } from "../tools/Tool/Tool";
import ProjectHeader from "./ProjectHeader/ProjectHeader";
import { subheadings_en, subheadings_pl } from "@/app/data/subheadings";
import { useLanguage } from "@/app/context/LanguageContext";
import { ProjectStage } from "./ProjectStage/ProjectStage";
import { ProjectShortSection } from "./ProjectShortSection/ProjectShortSection";

const Project = ({ project }: { project: IProject }) => {
  const { id, role, context, sections, stack, stages } = project;
  const { language } = useLanguage();
  const subheadings = language === "en" ? subheadings_en : subheadings_pl;

  return (
    <article
      className="project max-w-full z-2 lg:p-8 pb-16! flex grow flex-col order-2 bg-mauve-200/60 lg:shadow-lg"
      id={id}>
      <div className="max-w-200 mx-auto my-0 bg-transparent">
        <ProjectHeader project={project} />
        {(context || role) && (
          <div className="shadow-md mb-8 p-4 w-7/10 mx-auto bg-mauve-50/60 rounded-lg">
            {role && (
              <ProjectShortSection heading={subheadings.role} content={role} />
            )}
            {context && (
              <ProjectShortSection
                heading={subheadings.context}
                content={context}
              />
            )}
          </div>
        )}

        <h2 className="project-section__heading">{subheadings.tools}</h2>
        <div className="project-section__content project__tools md:max-w-[80%] lg:max-w-[60%]">
          {stack.map((tool) => (
            <Tool label={tool} key={`project__tool-${tool}`} isMain />
          ))}
        </div>

        {stages && (
          <h2 className="project-section__heading mt-4">
            {subheadings.stages}
          </h2>
        )}
        {stages && (
          <div className="project-section__content max-w-full lg:max-w-4/5 pb-8! border-b border-mauve-400 flex flex-col gap-0">
            {stages.map((stage, i) => (
              <ProjectStage
                key={stage.id}
                data={{
                  ...stage,
                  iconPath: `/img/icons/numbers/number-${i + 1}.png`,
                }}
              />
            ))}
          </div>
        )}

        {sections?.map(({ title, content }) => (
          <ProjectSection
            key={`${id}-${title}`}
            heading={title}
            content={content}
          />
        ))}
      </div>
    </article>
  );
};

export default Project;
