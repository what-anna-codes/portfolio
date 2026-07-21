import { ReactNode } from "react";

export const SectionHeader = ({
  content,
  color,
}: {
  content: string | ReactNode;
  color?: string;
}) => {
  return (
    <h2
      className={`${color || "text-mauve-600"} p-12 pb-8 text-5xl font-semibold leading-10 tracking-tight`}>
      {content}
    </h2>
  );
};
