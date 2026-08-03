import { IconButton } from "../../../ui/IconButton/IconButton";

interface Props {
  disabled?: boolean;
  onClick: () => void;
}

export function PrevButton({ disabled = false, onClick }: Props) {
  return (
    <IconButton
      classNames="button__prev"
      src={`/img/icons/previous.png`}
      onClick={onClick}
      disabled={disabled}
    />
  );
}
