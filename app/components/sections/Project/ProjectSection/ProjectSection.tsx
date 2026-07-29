import "./ProjectSection.css";

interface Props {
  heading: string;
  content: string;
}

export function ProjectSection({ heading, content }: Props) {
  return (
    <>
      <h4 className="text-mauve-500 font-normal mt-8 text-3xl!">{heading}</h4>
      <div className="project-section font-sans w-full mt-8 p-2 py-3 border-y border-mauve-200 text-mauve-600">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
