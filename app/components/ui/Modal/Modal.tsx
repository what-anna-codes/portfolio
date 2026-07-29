import { useClickAway, useLockBodyScroll } from "@uidotdev/usehooks";

import "./Modal.css";
import { ReactNode } from "react";
import { CloseButton } from "./CloseButton/CloseButton";

interface Props {
  content: ReactNode;
  onClose: () => void;
}

export function Modal({ content, onClose }: Props) {
  useLockBodyScroll();
  const ref = useClickAway(() => onClose()) as React.RefObject<HTMLDivElement>;

  return (
    <div className="overlay">
      <div className="modal" ref={ref} role="dialog" aria-modal="true">
        <div className="modal__close">
          <CloseButton onClick={onClose} />
        </div>
        {content}
      </div>
    </div>
  );
}
