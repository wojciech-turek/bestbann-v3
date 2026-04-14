import BestQualitySeparator from "@/components/shared/BestQualitySeparator";
import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH3 } from "@/components/shared/TypographyH3";
import { TypographyP } from "@/components/shared/TypographyP";
import { useTranslations } from "next-intl";
import Image from "next/image";

const cards = [
  {
    title: "Natural materials",
    description:
      "Baskets are made of natural rattan material, do not contain preservatives or bleaches. We carefully select our suppliers to ensure that the material is suitable to our needs",
    src: "/taking-care/taking-care-1.png",
  },
  {
    title: "Transforming communities",
    description:
      "By indirect sustainable job creation in distant locations in Asia, we empower our natural rattan material suppliers, their workers and all their families to break the cycle of poverty and build a brighter future",
    src: "/taking-care/taking-care-2.png",
  },
];

const TakingCare = () => {
  const t = useTranslations("AboutPage.takingCare");
  return (
    <div className="space-y-10 px-4">
      <TypographyH2>
        {t.rich("title", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
          br: () => <br className="hidden sm:block" />,
        })}
      </TypographyH2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-32">
          <Image
            src={"/imgs/taking-care-1.png"}
            alt={cards[0].title}
            width={432}
            height={288}
            className="object-cover rounded-2xl w-full md:w-auto md:max-w-[50%]"
            quality={100}
          />
          <div className="flex flex-col max-w-full md:max-w-[500px]">
            <TypographyH3 className="text-2xl sm:text-[32px] md:text-[40px] tracking-tight">
              {cards[0].title}
            </TypographyH3>
            <TypographyP>{cards[0].description}</TypographyP>
          </div>
        </div>
        <BestQualitySeparator className="hidden sm:flex" />
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16 lg:gap-32">
          <Image
            src={"/imgs/taking-care-2.png"}
            alt={cards[1].title}
            width={432}
            height={288}
            className="object-cover rounded-2xl w-full md:w-auto md:max-w-[50%]"
            quality={100}
          />
          <div className="flex flex-col max-w-full md:max-w-[500px]">
            <TypographyH3 className="text-2xl sm:text-[32px] md:text-[40px] tracking-tight">
              {cards[1].title}
            </TypographyH3>
            <TypographyP>{cards[1].description}</TypographyP>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakingCare;
