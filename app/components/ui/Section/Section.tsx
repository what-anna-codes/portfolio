import { ReactNode } from "react";

export const Section = ({
  id,
  classNames,
  children,
  bg,
}: {
  id?: string;
  classNames?: string;
  children: ReactNode;
  bg?: string;
}) => {
  return (
    <div
      id={id}
      className={`${bg || "bg-mauve-50"} my-8 flex flex-col justify-between shadow-2xl w-full grow flex-1 pb-0 pt-12 max-w-5xl
      border-t border-b border-mauve-900/20 ${classNames}`}>
      {children}
    </div>
  );
};
