"use client";
import { Provider } from "./providers/LanguageProvider";
import HomePage from "./components/pages/HomePage";

export default function Home() {
  return (
    <Provider>
      <HomePage />
    </Provider>
  );
}
