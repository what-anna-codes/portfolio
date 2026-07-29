import "./IconButton.css";
import Image from "next/image";
interface Props {
  classNames?: string;
  disabled?: boolean;
  src: string;
  onClick: () => void;
}

export function IconButton({
  classNames = "",
  disabled = false,
  src,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`icon-button ${classNames}`}>
      <Image width={100} height={100} src={src} alt={`icon-${src}`} />
    </button>
  );
}
