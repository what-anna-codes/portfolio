import { ReactNode } from "react";

export const TextBlock = ({
  content,
  width,
}: {
  content: string;
  width?: string;
}) => {
  return (
    <div
      className={`${width || "w-[80%]"} text-pretty pl-12`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
