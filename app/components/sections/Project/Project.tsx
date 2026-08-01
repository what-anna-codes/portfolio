import { IProject } from "@/app/data/projects-en";
import "./Project.css";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { Card } from "../journey/Moment/Moment";
import { Tool } from "../tools/Tool/Tool";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const Project = ({ project }: { project: IProject }) => {
  const { id, sections, stack } = project;
  return (
    <article className="project flex flex-col w-full order-2" id={id}>
      <ProjectHeader project={project} />
      <div className="project__tools md:max-w-[80%] lg:max-w-[60%]">
        {stack.map((tool) => (
          <Tool label={tool} key={`project__tool-${tool}`} isMain={false} />
        ))}
      </div>
      {project?.stages && (
        <h4 className="text-mauve-500 font-light mt-10 mb-4 text-3xl!">
          process stages
        </h4>
      )}

      {project?.stages &&
        project.stages.map((stage) => (
          <Card
            onClick={() => null}
            data={{
              id: `${project.id}-stage-${stage.index}`,
              position: stage.index,
              title: stage.title,
              lead: stage.content,
              picture: `/img/icons/numbers/number-${stage.index}.png`,
            }}
            key={`${project.id}-stage-${stage.index}`}
          />
        ))}

      {sections?.map((s) => (
        <ProjectSection
          key={`${id}-${s.title}`}
          heading={s.title}
          content={s.content}
        />
      ))}
    </article>
  );
};

export default Project;
