import { IProject } from "@/app/data/projects-en";
import "./Project.css";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { Card } from "./Moment/Card";
import { Tool } from "../tools/Tool/Tool";

const Project = ({ project }: { project: IProject }) => {
  const { id, name, role, description, sections, stack } = project;
  return (
    <article className="project flex grow-0! shrink w-fit order-2" id={id}>
      <h2 className="text-5xl! p-16 mt-2 pl-0">{name}</h2>
      <div className="project__tools md:max-w-[80%] lg:max-w-[60%]">
        {stack.map((tool) => (
          <Tool label={tool} key={`project__tool-${tool}`} isMain={false} />
        ))}
      </div>
      {description && (
        <div className="flex flex-col gap-4 w-full mt-8 p-2 py-6 border-y border-mauve-200 bg-mauve-100/80 text-mauve-600">
          <p>
            <span className="font-semibold">The project: </span>
            {description}{" "}
          </p>
          {role && (
            <p>
              <span className="font-semibold">My role: </span>
              {role}
            </p>
          )}
        </div>
      )}
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
              picture: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/icons/numbers/number-${stage.index}.png`,
            }}
            key={`${project.id}-stage-${stage.index}`}
          />
        ))}

      {sections.map((s) => (
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
