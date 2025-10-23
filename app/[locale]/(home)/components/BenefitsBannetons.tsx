import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH3 } from "@/components/shared/TypographyH3";
import { TypographyP } from "@/components/shared/TypographyP";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BenefitsBannetons = () => {
  const t = useTranslations("HomePage.benefits");

  const sections = [
    {
      title: t.rich("sections.eco.title"),
      description: t("sections.eco.description"),
      src: "/deco/ecological.svg",
    },
    {
      title: t("sections.easy.title"),
      description: t("sections.easy.description"),
      src: "/deco/easy.svg",
    },
    {
      title: t("sections.shape.title"),
      description: t("sections.shape.description"),
      src: "/deco/shape.svg",
    },
    {
      title: t("sections.handmade.title"),
      description: t("sections.handmade.description"),
      src: "/deco/handmade.svg",
    },
  ];

  return (
    <div className="container mx-auto sm:py-12 px-4 sm:px-24">
      <div className="text-center">
        <TypographyH2 className="whitespace-nowrap">
          {t.rich("title", {
            deco: (chunks) => <DecoText>{chunks}</DecoText>,
          })}
        </TypographyH2>
      </div>

      <div className="mt-8 sm:mt-12 grid items-center gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-8">
          {sections.slice(0, 2).map((section) => (
            <div key={section.title as string} className="text-center">
              <div className="relative mx-auto sm:mb-4 h-30 w-30">
                <Image
                  src={section.src}
                  alt={"benefits"}
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
            alt={"benefits"}
            fill
            className="object-contain h-fit"
          />
        </div>

        <div className="flex flex-col gap-8">
          {sections.slice(2, 4).map((section) => (
            <div key={section.title as string} className="text-center">
              <div className="relative mx-auto mb-4 h-32 w-32">
                <Image
                  src={section.src}
                  alt={"benefits"}
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
