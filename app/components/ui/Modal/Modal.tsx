import { useClickAway, useLockBodyScroll } from "@uidotdev/usehooks";

import "./Modal.css";
import { ReactNode } from "react";
import { CloseButton } from "./CloseButton/CloseButton";
import { motion } from "motion/react";

interface Props {
  content: ReactNode;
  onClose: () => void;
}

export function Modal({ content, onClose }: Props) {
  useLockBodyScroll();
  const ref = useClickAway(() => onClose()) as React.RefObject<HTMLDivElement>;

  return (
    <div className="overlay">
      {/* //@ts-ignore */}
      <motion.div
        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="modal relative"
        ref={ref}
        role="dialog"
        aria-modal="true">
        <div className="modal__close">
          <CloseButton onClick={onClose} />
        </div>
        {content}
      </motion.div>
    </div>
  );
}
