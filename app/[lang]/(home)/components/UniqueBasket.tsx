import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";

const UniqueBasket = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="flex container mx-auto">
      <div className="basis-1/2 bg-beige-1">test</div>
      <div className="basis-1/2 bg-beige-2 rounded-2xl p-10 pl-16 pr-40 py-40">
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
      </div>
    </div>
  );
};

export default UniqueBasket;
