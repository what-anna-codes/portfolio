import { ReactNode, useEffect, useState } from "react";

export const MomentImage = ({ image }: { image: ReactNode }) => {
  return <div>{image}</div>;
};

interface Props {
  title: string | ReactNode;
  lead: string | ReactNode;
  image: string | ReactNode;
  position?: number;
}

export const MomentLayout = ({ title, lead, image, position }: Props) => {
  const [mLeft, setMLeft] = useState<string>();
  useEffect(() => {
    const positions = ["ml-0", "ml-8 md:ml-15", "ml-16 md:ml-30"];
    const marginLeft =
      typeof position === "number" ? positions[position - 1] : positions[0];

    !mLeft && position && setMLeft(marginLeft);
  }, [position]);
  if (!mLeft) return null;
  return (
    <div className={`${mLeft} flex mb-25 md:mb-35 bg-neutral-200`}>
      <div className="w-auto h-25 md:h-50 aspect-square shrink-0 rounded-full overflow-hidden bg-neutral-600">
        <MomentImage image={image} />
      </div>
      <div className="relative w-auto h-12.5 md:h-25 grow bg-neutral-300">
        {title}
        <div className="absolute top-full h-[200%] overflow-hidden bg-neutral-400">
          {lead}
        </div>
      </div>
    </div>
  );
};
