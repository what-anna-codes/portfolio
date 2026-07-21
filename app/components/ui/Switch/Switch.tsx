import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./Switch.css";

type O = string | number;
type SwitchType = "link" | "button";
interface Props {
  options: O[];
  select: (par: any) => void;
  selected: O;
  classNames?: string;
  type?: SwitchType;
}

export default function Switch({
  selected,
  select,
  options,
  type = "button",
  classNames,
}: Props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const newIndex = options.indexOf(selected);
    newIndex !== index && newIndex >= 0 && setIndex(newIndex);
  }, [selected, options, index]);
  return (
    <motion.div
      className={`btn-frame ${classNames ?? ""}`}
      transition={{ duration: 0.4 }}>
      <motion.div
        className="btn-frame__indicator"
        transition={{ duration: 0.2, type: "tween" }}
        initial={false}
        animate={{
          x: `calc(${index} * 100% + ${index * 2} * var(--px) + var(--px))`,
        }}
      />
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => select(opt)}
          disabled={selected === opt}
          className={`btn-frame__btn cursor-pointer ${selected === opt ? "btn-frame__btn--selected" : ""} ${type === "link" ? "p-0" : ""}`}>
          {type === "link" ? (
            <a className="switch-link" href={`#${opt}`}>
              {opt}
            </a>
          ) : (
            opt
          )}
        </button>
      ))}
    </motion.div>
  );
}
