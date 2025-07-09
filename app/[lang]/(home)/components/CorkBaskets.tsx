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
    <div className="bg-beige-3 pt-32">
      <div className="flex relative">
        <div className="relative flex-1 hidden lg:block">
          <Image
            src="/deco/bean-orange-transparent.svg"
            alt="deco"
            width={210}
            height={210}
            className="absolute top-0 2xl:top-1/6 right-1/3 rotate-160"
          />
          <Image
            src="/deco/bean-gray.svg"
            alt="deco"
            width={100}
            height={100}
            className="absolute top-3/5 left-1/3"
          />
        </div>
        <div className="flex flex-col items-center z-10 px-4">
          <TypographyH2 className="text-center mb-12">
            <RichText>{dict.home.corkBaskets.title}</RichText>
          </TypographyH2>
          <TypographyP className="text-center mb-12 text-lg max-w-[60ch]">
            <RichText>{dict.home.corkBaskets.description}</RichText>
          </TypographyP>
          <Button size="lg" className="">
            {dict.buttons.buyCorkBaskets} <ArrowRight className="w-4 h-4" />
          </Button>
          <Image
            src="/imgs/home/cork-half.png"
            alt="Cork Baskets"
            width={803}
            height={357}
            className="mt-16"
          />
        </div>
        <div className="relative flex-1 hidden lg:block">
          <Image
            src="/deco/bean-orange.svg"
            alt="deco"
            width={100}
            height={100}
            className="absolute top-1/4 left-1/6 rotate-210 scale-x-[-1]"
          />
          <Image
            src="/deco/bean-gray-transparent.svg"
            alt="deco"
            width={150}
            height={150}
            className="absolute top-1/2 left-1/3 scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default CorkBaskets;
