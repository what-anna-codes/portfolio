import { TextBlock } from "../../../ui/TextBlock/TextBlock";

interface Props {
  heading: string;
  content: string;
}

export const ProjectShortSection = ({ heading, content }: Props) => {
  return (
    <>
      <strong className="text-lg">{heading}</strong>

      <TextBlock
        classNames="py-2 px-0! text-justify-safe tracking-normal text-mauve-600"
        content={content}
      />
    </>
  );
};
