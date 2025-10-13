import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FamilyCompany = async ({
  lang,
  showButton,
}: {
  lang: string;
  showButton: boolean;
}) => {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-8 sm:gap-20 items-center justify-center px-4 sm:px-0">
      <div className="flex flex-col items-end">
        <Image
          src="/imgs/home/weronika-and-michal.png"
          alt="Weronika and Michal"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <TypographyP className="self-start">
          {dict.pages.shared.familyCompany.imageCaption}
        </TypographyP>
      </div>
      <div className="flex flex-col justify-center basis-1/2">
        <TypographyH2 className="text-left">
          <RichText>{dict.pages.shared.familyCompany.title}</RichText>
        </TypographyH2>
        <TypographyP className="mt-4 text-lg max-w-[50ch]">
          <RichText>{dict.pages.shared.familyCompany.description}</RichText>
        </TypographyP>
        <TypographyP className="mt-4 text-lg max-w-[50ch]">
          <RichText>{dict.pages.shared.familyCompany.description1}</RichText>
        </TypographyP>
        {showButton && (
          <>
            <div className="my-8 bg-brown-10 text-lg max-w-[50ch] h-[2.5px]" />
            <Button asChild size="lg" className="mt-8 self-start px-12">
              <Link href={dict.links.aboutUs}>
                {dict.buttons.moreAboutUs}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FamilyCompany;
