import { IMoment } from "@/app/data/journey";
import { MomentImage } from "./momentSections/MomentImage";
import { MomentContent } from "./momentSections/MomentContent";

interface Props {
  onClick: () => void;
  data: IMoment;
}

export const Moment = ({ onClick, data }: Props) => {
  const { title, lead, column = 0 } = data || {};
  const leftMargins = ["", "lg:ml-25", "lg:ml-50"];

  return (
    <div
      onClick={onClick}
      className={`ml-0 ${leftMargins[column]} mb-50 md:mb-40 pl-3 md:pl-12 flex`}>
      <MomentImage data={data} />
      <MomentContent title={title} lead={lead} />
    </div>
  );
};
