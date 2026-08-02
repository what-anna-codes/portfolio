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
      className="project lg:p-8 md:min-w-[40vw] lg:shadow-xl z-2  flex flex-col order-2"
      id={id}>
      <ProjectHeader project={project} />
      {context ||
        (role && (
          <div className="shadow-md p-4 bg-mauve-100 rounded-lg">
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
        ))}

      <h4 className="project-section__heading">{subheadings.tools}</h4>
      <div className="project-section__content project__tools md:max-w-[80%] lg:max-w-[60%]">
        {stack.map((tool) => (
          <Tool label={tool} key={`project__tool-${tool}`} isMain />
        ))}
      </div>

      {stages && (
        <h4 className="project-section__heading">{subheadings.stages}</h4>
      )}
      {stages && (
        <div className="project-section__content max-w-full  lg:max-w-[80%] flex flex-col columns-2 gap-4">
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
    </article>
  );
};

export default Project;
