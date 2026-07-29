import { IconButton } from "../../IconButton/IconButton";

interface Props {
  onClick: () => void;
}

export function CloseButton({ onClick }: Props) {
  return (
    <IconButton
      classNames="modal__close__icon"
      src={`${process.env.PUBLIC_URL ?? ""}/img/icons/delete.png`}
      onClick={onClick}
    />
  );
}
