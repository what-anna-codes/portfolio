 
import { useLanguage } from "@/app/context/LanguageContext";
import Switch from "../Switch/Switch";
import "./LanguageSwitch.css";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switch">
      <Switch options={["en", "pl"]} selected={language} select={setLanguage} />
    </div>
  );
}
