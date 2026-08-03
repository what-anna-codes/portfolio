import { MomentLayout } from "./MomentLayout/MomentLayout";

export const Moment = ({ onClick, data }: any) => {
  const { position, title, lead, picture, iconPath, projectId } = data;
  const imageUrl = projectId ? `/img/projects/horizontal/${picture}` : iconPath;

  return (
    <div onClick={onClick}>
      <MomentLayout
        position={position}
        title={title}
        lead={lead}
        imageUrl={imageUrl}
      />
    </div>
  );
};
