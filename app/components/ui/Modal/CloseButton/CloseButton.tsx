import { IconButton } from "../../IconButton/IconButton";

interface Props {
  onClick: () => void;
}

export function CloseButton({ onClick }: Props) {
  return (
    <IconButton
      src={'/img/icons/close.png'}
      onClick={onClick}
    />
  );
}
