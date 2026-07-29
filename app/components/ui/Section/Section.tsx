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
      className={`${bg ?? "bg-mauve-100"} my-0 flex flex-col justify-between w-full grow flex-1 pb-0 pt-12 max-w-5xl! border-t border-b-40 border-white  ${classNames}`}>
      {children}
    </div>
  );
};
