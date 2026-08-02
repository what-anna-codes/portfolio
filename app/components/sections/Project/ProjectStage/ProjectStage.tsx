import { TextBlock } from "@/app/components/ui/TextBlock/TextBlock";
import { IProjectStage } from "@/app/data/projects-en";

export const ProjectStage = ({ data }: { data: IProjectStage }) => {
  const { title, content, iconPath } = data;

  return (
    <div className="max-w-full min-h-fit mx-8 p-4 font-sans">
      <div className="min-w-fit flex items-center justify-start">
        {iconPath && (
          <div
            style={{ transition: "all 0.8s" }}
            className="w-16 lg:w-24 h-auto -translate-x-10 flex justify-start aspect-square rounded-full border-3 border-white outline-3 outline-mauve-400 shadow-md">
            <img
              src={iconPath}
              alt={title}
              className="w-full h-auto aspect-square object-cover object-center"
            />
          </div>
        )}
        <h3 className="max-w-full flex justify-start mr-4 text-xl md:text-3xl text-stone-800 uppercase tracking-wide">
          {title}
        </h3>
      </div>

      <TextBlock
        classNames="max-w-full h-fit ml-12 lg:pr-4 justify-start text-justify-safe text-stone-600 leading-normal"
        content={content}
      />
    </div>
  );
};
