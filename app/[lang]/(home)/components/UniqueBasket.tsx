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
    <div className="flex container mx-auto gap-2.5">
      <div className="basis-1/2 bg-beige-1 relative rounded-2xl overflow-hidden">
        <Image
          src="/imgs/baskets/engraved/engraved.jpg"
          alt="unique basket"
          fill
          className="object-cover object-right"
        />
      </div>
      <div className="basis-1/2 bg-beige-2 rounded-2xl p-10 pl-16 pr-40 py-40 relative overflow-hidden">
        <Image
          src="/deco/bean-gray-transparent.svg"
          alt="decorative bean"
          width={100}
          height={100}
          className="absolute top-5 right-30 w-32 h-32 rotate-140"
        />
        <TypographyH2 className="text-left">
          <RichText>{dict.home.uniqueBasket.title}</RichText>
        </TypographyH2>
        <Separator orientation="horizontal" className="bg-brown-10 my-12" />
        <TypographyP className="text-lg text-left">
          <RichText>{dict.home.uniqueBasket.description}</RichText>
        </TypographyP>
        <Button size="lg" className="w-fit mt-10 px-12">
          {dict.buttons.orderUniqueBasket} <ArrowRight className="w-4 h-4" />
        </Button>
        <Image
          src="/deco/bean-gray.svg"
          alt="decorative bean"
          width={200}
          height={200}
          className="absolute -bottom-16 right-12 w-64 h-64 scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default UniqueBasket;
