import { IconButton } from "../../IconButton/IconButton";

interface Props {
  onClick: () => void;
}

export function CloseButton({ onClick }: Props) {
  return (
    <IconButton
      classNames="modal__close__icon"
      src={'/img/icons/delete.png'}
      onClick={onClick}
    />
  );
}
