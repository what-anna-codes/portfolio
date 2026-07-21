import { ReactNode } from "react";

export const SectionHeader = ({
  content,
  color,
  classNames
}: {
  content: string | ReactNode;
  color?: string;
  classNames?: string
}) => {
  return (
    <h2
      className={`${color || "text-mauve-600"} p-12 pb-8 text-5xl font-semibold leading-10 tracking-tight ${classNames}`}>
      {content}
    </h2>
  );
};
