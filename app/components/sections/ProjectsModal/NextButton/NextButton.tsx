import { IconButton } from "../../../ui/IconButton/IconButton";

interface Props {
  disabled?: boolean;
  onClick: () => void;
}

export function NextButton({ disabled = false, onClick }: Props) {
  return (
    <IconButton
      src={`${process.env.PUBLIC_URL ?? ""}/img/icons/next.png`}
      onClick={onClick}
      disabled={disabled}
    />
  );
}
