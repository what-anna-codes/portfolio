import "./IconButton.css";
import Image from "next/image";

type ConditionalProps = { href: string } | { onClick: () => void };

interface Props {
  src: string;
  disabled?: boolean;
  classNames?: string;
  onClick?: () => void;
  href?: string;
}

export function IconButton({
  classNames = "",
  disabled = false,
  src,
  href,
  onClick,
}: Props & ConditionalProps) {
  const content = (
    <Image width={100} height={100} src={src} alt={`icon-${src}`} />
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`icon-button ${classNames} z-1000 cursor-pointer pointer-events-auto  `}>
      {content}
    </a>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`icon-button ${classNames} z-1000 cursor-pointer pointer-events-auto  `}>
      {content}
    </button>
  );
}
