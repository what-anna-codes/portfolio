import { motion } from "motion/react";

interface Props {
  isVisible?: boolean;
  isMain?: boolean;
  label: string;
  index?: number;
  classNames?: string;
}

export const Tool = ({
  isVisible = true,
  isMain = true,
  label,
  index = 0,
  classNames = ''
}: Props) => (
  <motion.div
    layout
    transition={{
      type: "tween",
      ease: "easeInOut",
      duration: 0.2,
      delay: isVisible ? index * 0.2 - 0.2 : 1.2 - index * 0.2,
    }}
    initial={{
      opacity: 0,
      height: isVisible ? "3rem" : 1,
      marginBottom: isVisible ? "1rem" : 0,
    }}
    animate={{
      opacity: isVisible ? 1 : 0,
      marginBottom: isVisible ? "1rem" : 0,
      height: isVisible ? "3rem" : 1,
    }}
    key={`tool-${label}`}
    className={`p-2 px-4 grid place-items-center rounded-lg shadow-lg text-center break-word
                    ${isVisible ? "h-12 min-h-fit mb-4" : "h-0 m-0"}
                    ${isMain ? "bg-mauve-500 text-mauve-200/80 font-normal" : "bg-mauve-200/80 text-mauve-500 font-light"}
                    ${classNames}`}>
    {label}
  </motion.div>
);
