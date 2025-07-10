import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const FamilyCompany = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto flex gap-20 items-center justify-center">
      <div className="flex flex-col items-end">
        <Image
          src="/imgs/home/weronika-and-michal.png"
          alt="Weronika and Michal"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <TypographyP className="self-start">
          {dict.home.familyCompany.imageCaption}
        </TypographyP>
      </div>
      <div className="flex flex-col justify-center basis-1/2">
        <TypographyH2 className="text-left">
          <RichText>{dict.home.familyCompany.title}</RichText>
        </TypographyH2>
        <TypographyP className="mt-4 text-lg max-w-[50ch]">
          <RichText>{dict.home.familyCompany.description}</RichText>
        </TypographyP>
        <Button size="lg" className="mt-8 self-start px-12">
          {dict.buttons.moreAboutUs}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FamilyCompany;
