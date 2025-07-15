import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH3 } from "@/components/shared/TypographyH3";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";

const BenefitsBannetons = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  const sections = [
    {
      title: dict.home.benefits.sections.eco.title,
      description: dict.home.benefits.sections.eco.description,
      src: "/deco/ecological.svg",
    },
    {
      title: dict.home.benefits.sections.easy.title,
      description: dict.home.benefits.sections.easy.description,
      src: "/deco/easy.svg",
    },
    {
      title: dict.home.benefits.sections.shape.title,
      description: dict.home.benefits.sections.shape.description,
      src: "/deco/shape.svg",
    },
    {
      title: dict.home.benefits.sections.handmade.title,
      description: dict.home.benefits.sections.handmade.description,
      src: "/deco/handmade.svg",
    },
  ];

  return (
    <div className="container mx-auto sm:py-12 px-4 sm:px-24">
      <div className="text-center">
        <TypographyH2 className="whitespace-nowrap">
          <RichText>{dict.home.benefits.title}</RichText>
        </TypographyH2>
      </div>

      <div className="mt-8 sm:mt-12 grid items-center gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-8">
          {sections.slice(0, 2).map((section) => (
            <div key={section.title} className="text-center">
              <div className="relative mx-auto sm:mb-4 h-30 w-30">
                <Image
                  src={section.src}
                  alt={section.title}
                  fill
                  className="object-contain"
                />
              </div>
              <TypographyH3>{section.title}</TypographyH3>
              <TypographyP>{section.description}</TypographyP>
            </div>
          ))}
        </div>

        <div className="relative h-[396px] sm:h-[486px] sm:px-24 ">
          <Image
            src="/imgs/home/benefits-trimmed.png"
            alt={dict.home.benefits.title as string}
            fill
            className="object-contain h-fit"
          />
        </div>

        <div className="flex flex-col gap-8">
          {sections.slice(2, 4).map((section) => (
            <div key={section.title} className="text-center">
              <div className="relative mx-auto mb-4 h-32 w-32">
                <Image
                  src={section.src}
                  alt={section.title}
                  fill
                  className="object-contain"
                />
              </div>
              <TypographyH3>{section.title}</TypographyH3>
              <TypographyP>{section.description}</TypographyP>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsBannetons;
