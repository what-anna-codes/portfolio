import Image from "next/image";
import { contact } from "@/app/data/contact";
import { IconButton } from "../../ui/IconButton/IconButton";

export const LinkPanel = () => {
  const media = ["linkedin", "github"] as const;
  return (
    <div className="mt-8 ml-12 max-sm:place-self-center w-fit max-sm:ml-0 flex justify-center gap-4 h-10">
      {Array.isArray(media) &&
        media.map((media, i) => (
          <IconButton
            key={`media-icon-key-${media} ${i}`}
            src={`/img/icons/${media}.png`}
            href={contact[media]?.url || ""}
            aria-label={media}
            classNames="about__contact__link" />
        ))}
    </div>
  );
};
