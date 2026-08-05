import { IMoment } from "@/app/data/journey";

interface Props {
  onClick: () => void;
  data: IMoment;
}

export const MomentContent = ({
  title,
  lead,
}: Pick<IMoment, "title" | "lead">) => {
  return (
    <div className="relative w-auto h-12.5 md:h-25 grow">
      <h3 className="relative h-full pb-2 grow pl-8 md:pl-16 mr-4 md:mr-12 md:w-fit md:min-w-[65%] md:max-w-[75%] border-b-2 md:border-b-6 z-50 border-olive-500 flex items-end justify-end text-olive-600 text-right text-2xl md:text-3xl font-semibold  ">
        {title}
        <div className="drop-shadow-2xl absolute line-clamp-9 text-ellipsis overflow-hidden w-full text-pretty   top-full h-fit  md:max-h-[200%]   pb-2 pl-4 md:pl-8 pt-3 font-sans font-normal text-[1rem] xl:text-lg">
          {lead}
        </div>
      </h3>
    </div>
  );
};
