import { ReactNode, useEffect, useState } from "react";
import "./MomentLayout.css";
export const MomentImage = ({ imageUrl }: { imageUrl: string }) => {
  const effects =
    "duration-800 shadow-md hover:shadow-xl hover:scale-150 transform-3d perspective-1000 origin-center-right hover:md:scale-200 hover:md:left-0 border-white/80 hover:border-white/90 border-4 md:border-10 outline-olive-500 outline-3 hover:outline-olive-600/90";
  return (
    <div
      className={`z-100 scale-110 md:scale-100 w-auto h-25 md:h-50 aspect-square shrink-0 rounded-full overflow-hidden bg-neutral-600 ${effects}`}>
      <img
        src={imageUrl}
        alt={""}
        className="brightness-75 hover:brightness-90 hover:saturate-120 opacity-90 hover:opacity-100 h-full aspect-video w-auto object-cover object-center scale-110 duration-1000"
      />
    </div>
  );
};

interface Props {
  title: string | ReactNode;
  lead: string | ReactNode;
  imageUrl: string;
  position?: number;
}

export const MomentLayout = ({ title, lead, imageUrl, position }: Props) => {
  const [mLeft, setMLeft] = useState<string>();
  useEffect(() => {
    const positions = ["-ml-10", "ml-0 md:ml-25", "ml-10 md:ml-50"];
    const marginLeft =
      typeof position === "number" ? positions[position - 1] : positions[0];

    !mLeft && position && setMLeft(marginLeft);
  }, [position]);
  console.log(
    "mgfmgfg",
    `${process.env.PUBLIC_URL}/img/projects/vertical/${imageUrl}`,
  );
  if (!mLeft) return null;
  return (
    <div className={`${mLeft} flex mb-50 md:mb-35 mr-0 pl-0 ml-3 md:pl-12`}>
      <MomentImage
        imageUrl={`${process.env.PUBLIC_URL ?? ""}/img/projects/horizontal/${imageUrl}`}
      />
      <div className="relative w-auto h-12.5 md:h-25 grow">
        <h3 className="relative h-full pb-2 grow md:grow pl-16  mr-12 md:w-fit md:min-w-[65%] md:max-w-[75%] border-b-2 md:border-b-6 z-50 border-olive-500 flex items-end justify-end text-olive-600 text-right text-pretty text-2xl md:text-3xl font-semibold  ">
          {title}
          <div className="moment-lead absolute drop-shadow-2xl w-full text-pretty   top-full h-fit  md:max-h-[200%]   pb-2 overflow-hidden pl-4 md:pl-8 pt-3 font-sans font-normal text-[17px] md:text-lg tracking-tighter md:tracking-tight">
            {lead}
          </div>
        </h3>
      </div>
    </div>
  );
};
