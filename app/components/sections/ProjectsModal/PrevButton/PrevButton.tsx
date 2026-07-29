import { IconButton } from "../../../ui/IconButton/IconButton";

interface Props {
  disabled?: boolean;
  onClick: () => void;
}

export function PrevButton({ disabled = false, onClick }: Props) {
  return (
    <IconButton
      classNames="button__prev"
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/icons/prev.png`}
      onClick={onClick}
      disabled={disabled}
    />
  );
}
