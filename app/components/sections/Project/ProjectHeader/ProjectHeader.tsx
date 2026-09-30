import { IProject } from "@/app/data/projects-en";

const ProjectHeader = ({ project }: { project: IProject }) => {
  const { name, description } = project;

  return (
    <div className="w-full my-12 py-0 flex flex-col gap-1 text-left">
      <h2 className="w-fit max-w-[70%] text-center mx-auto border-b-2 pb-4 text-4xl md:text-5xl leading-none">
        {name}
      </h2>
      <p className="w-[80%] mx-auto py-4 text-center text-pretty border-0 border-mauve-300 text-lg text-mauve-600">
        {description}
      </p>
     {(project?.code && project?.demo) && <div className="w-full flex justify-center gap-4 font-extrabold text-mauve-600">
        <a className="hover:text-mauve-800" href={project.code} target="_blank">CODE</a>
        <a className="hover:text-mauve-800" href={project.demo} target="_blank">DEMO</a>
      </div>}
    </div>
  );
};

export default ProjectHeader;
