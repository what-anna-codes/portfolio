import { IProject } from "@/app/data/projects-en";
import Project from "../../Project/Project";
import "./ModalContent.css";
export function ModalContent({ project }: { project: IProject }) {
  return (
    <div className="modal__content">
      <div className="order-1 w-screen max-w-full lg:w-0">
        <img
          alt={`${project.name} screenshot`}
          src={`/img/projects/horizontal/${project.image}`}
          width={16}
          height={9}
          className="lg:hidden w-full lg:w-0 h-auto aspect-video object-cover"
        />
      </div>
      <div
        className="hidden lg:flex h-full min-w-fit justify-end relative order-3 m-0"
        style={{ height: "100vh" }}>
        <img
          alt={`${project.name} screenshot`}
          src={`/img/projects/vertical/${project.image}`}
          className="w-auto object-right h-full max-h-full opacity-0  object-cover"
        />
        <img
          alt={`${project.name} screenshot`}
          src={`/img/projects/vertical/${project.image}`}
          className="w-auto object-right h-full max-h-full fixed object-cover"
        />
      </div>

      <Project project={project} />
    </div>
  );
}
