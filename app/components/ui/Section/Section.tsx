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

      className={`even:bg-mauve-100! even:border-y-4 pt-12 border-mauve-200 my-10 flex flex-col justify-between w-full grow flex-1 pb-0 pt-1b2 max-w-5xl! ${classNames}`}>
      {children}
    </div>
  );
};
