import { motion } from "motion/react";
import { IMoment } from "@/app/data/journey";
import { getIconPath, getImagePath } from "@/app/utils/utils";

export const MomentImage = ({ data }: { data: IMoment }) => {
  const { projectId, image, icon } = data || {};

  const path = image
    ? getImagePath(image, true)
    : icon
      ? getIconPath(icon, true)
      : "";

  const frame =
    "border-white/80 hover:border-white/90 border-4 md:border-10 outline-olive-500 outline-1 hover:outline-olive-600/90";
  return (
    <motion.div
      layout
      className={`z-100 w-auto rounded-full duration-300 h-25   md:h-50  ${projectId ? "cursor-pointer hover:shadow-xl bg-mauve-600" : "  cursor-default bg-mauve-200"} aspect-square shrink-0 overflow-hidden shadow-md ${frame}`}>
      <img
        src={path}
        alt={""}
        className={`${projectId ? "grayscale-70 hover:grayscale-0 scale-150 hover:saturate-120" : "contrast-50"} rounded-full opacity-90 hover:opacity-100 h-full w-auto aspect-square object-contain object-bottom-center`}
      />
    </motion.div>
  );
};
