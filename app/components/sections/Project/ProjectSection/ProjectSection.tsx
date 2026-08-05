import "./ProjectSection.css";

interface Props {
  heading: string;
  content: string;
}

export function ProjectSection({ heading, content }: Props) {
  return (
    <div className="project-section">
      <h2 className="project-section__heading">{heading}</h2>
      <div className="project-section__content leading-6">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
