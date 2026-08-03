import { TextBlock } from "../../../ui/TextBlock/TextBlock";

interface Props {
  heading: string;
  content: string;
}

export const ProjectShortSection = ({ heading, content }: Props) => {
  return (
    <>
      <strong className="uppercase font-bold tracking-wide">{heading}</strong>
      <TextBlock
        classNames="p-2 pl-0! text-justify-safe text-mauve-600"
        content={content}
      />
    </>
  );
};
