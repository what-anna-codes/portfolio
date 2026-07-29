import { IconButton } from "../../../ui/IconButton/IconButton";

interface Props {
  disabled?: boolean;
  onClick: () => void;
}

export function NextButton({ disabled = false, onClick }: Props) {
  return (
    <IconButton
      src={`/img/icons/next.png`}
      onClick={onClick}
      disabled={disabled}
    />
  );
}
