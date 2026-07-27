import { ReactNode, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { NextButton } from "../../sections/ProjectsModal/NextButton/NextButton";
import { PrevButton } from "../../sections/ProjectsModal/PrevButton/PrevButton";
import { CarouselItem } from "./CarouselTypes";
import "./Carousel.css";

interface Props {
  children: ReactNode;
  items: CarouselItem[];
  activeId?: string;
}

export function Carousel({ items, children, activeId }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const goToPrev = (): void => emblaApi?.scrollPrev();
  const goToNext = (): void => emblaApi?.scrollNext();

  const toggleButtonsDisabled = (
    emblaApi: UseEmblaCarouselType[1] | undefined,
  ) => {
    setPrevButtonDisabled(!emblaApi?.canScrollPrev());
    setNextButtonDisabled(!emblaApi?.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    toggleButtonsDisabled(emblaApi);
    emblaApi.on("select", toggleButtonsDisabled);
  }, [emblaApi]);

  useEffect(() => {
    const index = items?.findIndex((p: CarouselItem) => p.id === activeId) ?? 0;
    emblaApi && emblaApi?.scrollTo(index, true);
  }, [activeId, emblaApi, items]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={goToPrev} disabled={prevButtonDisabled} />
        <NextButton onClick={goToNext} disabled={nextButtonDisabled} />
      </div>
    </div>
  );
}
