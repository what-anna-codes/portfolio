import { TextBlock } from "@/app/components/ui/TextBlock/TextBlock";

export const Card = ({ data }: any) => {
  const { position, title, lead, picture } = data;

  return (
    <div className="ml-2 w-full relative  h-fit mt-12">
      <div
        style={{ transition: "all 0.8s" }}
        className="rounded-full absolute z-10 left-0  brightness-75 hover:brightness-100 bg-stone-400 border-white   border outline-3  shadow-md hover:shadow-xl overflow-hidden w-25 md:w-30 h-auto aspect-square     outline-stone-200 hover:text-stone-600/90">
        <img
          src={`/img/icons/numbers/number-${position}.png`}
          alt={picture}
          className=" h-full aspect-video w-auto object-cover object-center scale-110 duration-1000"
        />
      </div>

      <h3 className="h-13  border-b-6 border-stone-500/20 ml-30 pl-8 pr-0 pb-2 flex items-start text-stone-600 text-left text-pretty text-3xl font-light tracking-wide w-fit font-sans! uppercase">
        {title}
      </h3>
      <TextBlock
        classNames="h-fit  text-sm flex-inline flex-col  text-justify max-w-full tracking-tight font-light border-b-0 border-stone-400 ml-25 pl-13 pb-2      items-start pt-3 justify-center  text-stone-600 text-pretty text-[16px]"
        content={lead}
      />
    </div>
  );
};
