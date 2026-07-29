import { IProject } from "@/app/data/projects-en";
import Project from "../../Project/Project";
import "./ModalContent.css";

import { useWindowSize } from "@uidotdev/usehooks";
export function ModalContent({ project }: { project: IProject }) {
  const { width, height } = useWindowSize();

  // if (Number(width) < Number(height) ||  (Number(width) < 600)) {
  //   return null;
  // }

  return (
    <div className="w-screen modal__content flex flex-col md:flex-row relative md:justify-between bg-mauve-50!">
      <div className="md:hidden order-1 w-screen">
        <img
          alt={`${project.name} screenshot`}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/projects/horizontal/${project.image}`}
          width={16}
          height={9}
          className="w-screen h-auto object-cover"
        />
      </div>
      <div
        className="hidden md:flex h-full min-w-fit justify-end relative order-3 m-0"
        style={{ height: "calc(100vh - 6rem)" }}>
        <img
          alt={`${project.name} screenshot`}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/projects/vertical/${project.image}`}
          className="w-auto object-right h-full max-h-full opacity-0  object-cover"
        />
        <img
          alt={`${project.name} screenshot`}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/projects/vertical/${project.image}`}
          className="w-auto object-right h-full max-h-full fixed object-cover"
        />
      </div>

      <Project project={project} />
    </div>
  );
}
