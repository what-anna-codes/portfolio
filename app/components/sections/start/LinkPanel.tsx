import Image from "next/image";
import { contact } from "@/app/data/contact";

export const LinkPanel = () => {
  const media = ["github", "linkedin"] as const;
  return (
    <div className="mt-8 ml-12 max-sm:place-self-center w-fit max-sm:ml-0 flex justify-center gap-4 h-10">
      {Array.isArray(media) &&
        media.map((media, i) => (
          <a
            key={`media-icon-key-${media} ${i}`}
            href={contact[media]?.url || ""}
            aria-label={media}
            className="about__contact__link">
            <Image
              alt={media}
              width={48}
              height={48}
              src={`/img/icons/${media}.png`}
            />
          </a>
        ))}
    </div>
  );
};
