import { useLockBodyScroll } from "@uidotdev/usehooks";
import { IProject } from "@/app/data/projects-en";
import { Carousel } from "../../ui/Carousel/Carousel";
import { CarouselItem } from "../../ui/Carousel/CarouselTypes";
import "./ProjectsModal.css";
import { ModalContent } from "./ModalContent/ModalContent";

interface Props {
  projects: IProject[];
  activeId?: string;
  close: () => void;
}

export function ProjectsModal({ projects, activeId, close }: Props) {
  useLockBodyScroll();

  return (
    <Carousel items={projects as unknown as CarouselItem[]} activeId={activeId}>
      {projects.map((project) => (
        <div key={project.id} className="embla__slide">
          <ModalContent project={project} />
        </div>
      ))}
    </Carousel>
  );
}
