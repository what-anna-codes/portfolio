import { ReactNode } from "react";

export const TextBlock = ({
  content,
  classNames,
}: {
  content: string;
  classNames?: string;
}) => {
  return (
    <div
      className={`text-pretty ${classNames} pl-12`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
