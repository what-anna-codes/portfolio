import { TextBlock } from "@/app/components/ui/TextBlock/TextBlock";

export const Moment = ({ data }: any) => {
  const { title, description, picture } = data;

  return (
    <div className="relative border-white border-4 rounded-2xl my-16 mx-12 flex  even:flex-row odd:flex-row-reverse max-md:even:flex-col max-md:odd:flex-col-reverse">
      <h3 className="h-16 -top-16 absolute flex items-end justify-center pb-2 text-center text-2xl font-semibold w-full">
        {title}
      </h3>
      {picture && (
        <div className="timeline-item__image w-[50%]  max-md:w-full">
          <img
            src={`/img/projects/${picture}`}
            alt={picture}
            className="object-cover!"
          />
        </div>
      )}
      <div className={`${picture ? "w-[50%]" : "w-full"} max-md:w-full`}>
        <TextBlock
          classNames={`text-sm lg:text-md xl:text-md px-4! py-4 ${picture ? "text-justify" : "p-8! text-center"}`}
          content={description}
        />
      </div>
    </div>
  );
};
