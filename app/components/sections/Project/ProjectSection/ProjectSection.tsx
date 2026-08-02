import "./ProjectSection.css";

interface Props {
  heading: string;
  content: string;
}

export function ProjectSection({ heading, content }: Props) {
  return (
    <>
      <h4 className="project-section__heading">{heading}</h4>
      <div className="project-section__content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
