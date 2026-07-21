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
      className={`${bg || "bg-mauve-50"} flex flex-col flex-1 pb-12 pt-12 w-3xl
      border-t-2 border-b-2 border-mauve-300 ${classNames}`}>
      {children}
    </div>
  );
};
