import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CorkBaskets = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="bg-beige-3 pt-9 sm:pt-32 relative overflow-hidden">
      {/* Left side decorative beans */}
      <Image
        src="/deco/bean-orange-transparent.svg"
        alt="deco"
        width={210}
        height={210}
        className="absolute top-4/6 left-4 sm:top-0 sm:left-8 2xl:top-1/6 2xl:left-16 rotate-160 w-16 h-16 sm:w-32 sm:h-32 2xl:w-52 2xl:h-52 z-0"
      />
      <Image
        src="/deco/bean-gray.svg"
        alt="deco"
        width={100}
        height={100}
        className="absolute top-5/6 -left-4 sm:top-3/5 sm:left-16 2xl:left-24 w-12 h-12 sm:w-20 sm:h-20 2xl:w-25 2xl:h-25 z-0"
      />

      {/* Right side decorative beans */}
      <Image
        src="/deco/bean-orange.svg"
        alt="deco"
        width={100}
        height={100}
        className="absolute top-4/6 right-8 sm:top-1/4 sm:right-16 2xl:right-24 rotate-210 scale-x-[-1] w-12 h-12 sm:w-20 sm:h-20 2xl:w-25 2xl:h-25 z-0"
      />
      <Image
        src="/deco/bean-gray-transparent.svg"
        alt="deco"
        width={150}
        height={150}
        className="absolute top-9/12 -right-12 sm:right-8 2xl:right-16 scale-x-[-1] w-32 h-32 sm:w-24 sm:h-24 2xl:w-37 2xl:h-37 z-0"
      />

      <div className="flex flex-col sm:items-center z-10 px-4 relative">
        <TypographyH2 className="text-left sm:text-center mb-12">
          <RichText>{dict.home.corkBaskets.title}</RichText>
        </TypographyH2>
        <TypographyP className="text-left sm:text-center mb-12 text-lg max-w-[60ch]">
          <RichText>{dict.home.corkBaskets.description}</RichText>
        </TypographyP>
        <Button size="lg" className="w-fit">
          {dict.buttons.buyCorkBaskets} <ArrowRight className="w-4 h-4" />
        </Button>
        <Image
          src="/imgs/home/cork-half.png"
          alt="Cork Baskets"
          width={803}
          height={357}
          className="mt-20 sm:mt-16"
        />
      </div>
    </div>
  );
};

export default CorkBaskets;
