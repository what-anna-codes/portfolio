import { MomentLayout } from "./MomentLayout/MomentLayout";

export const Moment = ({ onClick, data }: any) => {
  const { position, title, lead, picture } = data;

  return (
    <div onClick={onClick}>
      <MomentLayout
        position={position}
        title={title}
        lead={lead}
        imageUrl={picture}
      />
    </div>
  );
};
