import { ReactNode } from "react";

export const Section = ({
  children,
  bg,
}: {
  children: ReactNode;
  bg?: string;
}) => {
  return (
    <div
      className={`${bg || "bg-mauve-50"} pb-8 max-w-3xl border-t-2 border-b-2 border-mauve-300`}>
      {children}
    </div>
  );
};
