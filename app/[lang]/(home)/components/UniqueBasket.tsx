import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const UniqueBasket = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col md:flex-row container mx-auto gap-3 md:gap-2.5 px-4 md:px-0">
      <div className="w-full md:basis-1/2 bg-beige-1 relative rounded-2xl overflow-hidden h-64 md:h-auto">
        <Image
          src="/imgs/baskets/engraved/engraved.jpg"
          alt="unique basket"
          fill
          className="object-cover object-right-bottom scale-150 sm:scale-100"
        />
      </div>
      <div className="w-full md:basis-1/2 bg-beige-2 rounded-2xl p-9 md:p-10 md:pl-16 md:pr-40 md:py-40 relative overflow-hidden">
        <Image
          src="/deco/bean-gray-transparent.svg"
          alt="decorative bean"
          width={100}
          height={100}
          className="absolute top-0 sm:top-5 scale-75 sm:scale-100 right-0 sm:right-30 w-32 h-32 rotate-140 z-0"
        />
        <TypographyH2 className="text-left max-w-[12ch] sm:w-full relative z-10">
          <RichText>{dict.home.uniqueBasket.title}</RichText>
        </TypographyH2>
        <Separator
          orientation="horizontal"
          className="bg-brown-20 my-5 sm:my-12 relative z-10"
        />
        <TypographyP className="text-lg text-left relative z-10">
          <RichText>{dict.home.uniqueBasket.description}</RichText>
        </TypographyP>
        <Button size="lg" className="w-fit mt-10 px-12 relative z-10">
          {dict.buttons.orderUniqueBasket} <ArrowRight className="w-4 h-4" />
        </Button>
        <Image
          src="/deco/bean-gray.svg"
          alt="decorative bean"
          width={200}
          height={200}
          className="absolute -bottom-32 sm:-bottom-16 right-0 sm:right-12 w-64 h-64 scale-x-[-1] z-0"
        />
      </div>
    </div>
  );
};

export default UniqueBasket;
