import { ReactNode } from "react";
import { LanguageProvider } from "../context/LanguageContext";

export const Provider = ({ children }: { children: ReactNode }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
