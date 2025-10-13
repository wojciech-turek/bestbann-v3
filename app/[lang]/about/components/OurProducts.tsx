import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";

const OurProducts = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="relative flex flex-col gap-7 overflow-hidden rounded-2xl bg-beige-3 p-10 pt-30">
      <Image
        src="/deco/bean-gray-transparent.svg"
        alt="deco"
        width={100}
        height={100}
        className="absolute left-1/12 rotate-90 top-10"
      />
      <Image
        src="/deco/bean-orange.svg"
        alt="deco"
        width={280}
        height={320}
        className="absolute right-12 -top-32 scale-x-[-1]"
      />
      <TypographyH2 className="relative text-center">
        <RichText>{dict.about.ourProducts.title}</RichText>
      </TypographyH2>
      <TypographyP className="relative mx-auto max-w-[68ch] text-center text-lg">
        {dict.about.ourProducts.description}
      </TypographyP>

      <div className="relative mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 h-[600px] mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src="/imgs/baskets/cork/cork-rectangular.png"
              alt="Our Product"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
