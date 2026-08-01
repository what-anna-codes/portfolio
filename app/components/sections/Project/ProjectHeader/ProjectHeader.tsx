import { IProject } from "@/app/data/projects-en";

const ProjectHeader = ({ project }: { project: IProject }) => {
  const { name, description } = project;

  return (
    <div className="w-full my-4 lg:my-12 flex flex-col gap-4 text-center">
      <h2 className="w-full text-4xl md:text-6xl leading-none">
        {name}
      </h2>
      <p className="w-[80%] mx-auto p-4 md:px-[10%] lg:px-12 border-t border-mauve-300 text-mauve-600">
        {description}
      </p>
    </div>
  );
};

export default ProjectHeader;
